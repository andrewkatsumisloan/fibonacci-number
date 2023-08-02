from .. import db

class Fibonacci(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.BigInteger, nullable=False)