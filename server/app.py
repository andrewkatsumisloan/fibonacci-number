from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Test!'

@app.route('/generate_fib', methods=['POST'])
def generate_fib():
    data = request.get_json()
    n = data.get('NFib', 5)

    fibonacci_numbers = [0, 1]
    for i in range(2, n):
        next_fib = fibonacci_numbers[-1] + fibonacci_numbers[-2]
        fibonacci_numbers.append(next_fib)

    return jsonify({'fibonnaciNumbers': fibonacci_numbers})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
