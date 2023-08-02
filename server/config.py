import os 

class Config: 
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@fibonacci-db/fibonacci'
    SQLALCHEMY_TRACK_MODIFICATIONS = False