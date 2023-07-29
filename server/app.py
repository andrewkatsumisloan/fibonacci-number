from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@fibonacci-db/fibonacci'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Fibonacci(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.BigInteger, nullable=False)

def init_db():
    db.create_all()

@app.cli.command("initdb")
def initdb_command():
    init_db()
    print('Initialized the database.')

@app.route('/generate_fib', methods=['POST'])
def generate_fib():
    data = request.get_json()
    n = data['NFib']

    fibonacci_numbers = []

    # Check if the fib sequence already in db
    fibs_in_db = Fibonacci.query.order_by(Fibonacci.id).limit(n).all()
    for fib in fibs_in_db:
        fibonacci_numbers.append(fib.value)

    # Compute the rest of the numbers if applicable
    for i in range(len(fibonacci_numbers), n):
        if i == 0:
            next_fib = 0
        elif i == 1:
            next_fib = 1
        else:
            next_fib = fibonacci_numbers[-1] + fibonacci_numbers[-2]

        # store the number in the database
        new_fib = Fibonacci(value=next_fib)
        db.session.add(new_fib)
        db.session.commit()

        fibonacci_numbers.append(next_fib)

    return jsonify({'fibonacciNumbers': fibonacci_numbers})


if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)