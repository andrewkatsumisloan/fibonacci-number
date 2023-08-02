FROM python:3.8-slim-buster

WORKDIR /server

ADD . /server

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

# CMD ["python", "app.py"]
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
