from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from server.config import Config
import sys


app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

db = SQLAlchemy(app)



def init_db():
    db.create_all()

@app.cli.command("initdb")
def initdb_command():
    init_db()
    print('Initialized the database.')


if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)