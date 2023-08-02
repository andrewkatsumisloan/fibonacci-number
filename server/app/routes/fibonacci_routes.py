from flask import Blueprint, jsonify, request
from .. import db
from ..models.fibonacci import Fibonacci
import sys

fibonacci_routes = Blueprint('fibonacci_routes', __name__)

@fibonacci_routes.route('/generate_fib', methods=['POST'])
def generate_fib():
    data = request.get_json()
    n = data['NFib']

    fibonacci_numbers = []

    # Check if the fib sequence already in db
    fibs_in_db = Fibonacci.query.order_by(Fibonacci.id).limit(n).all()
    for fib in fibs_in_db:
        fibonacci_numbers.append(fib.value)
        print('Found in db... ', fib.value)

    # Compute the rest of the numbers if applicable
    for i in range(len(fibonacci_numbers), n):
        print(i)
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

    sys.stdout.flush()

    return jsonify({'fibonacciNumbers': fibonacci_numbers})