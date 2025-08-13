FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY requirements.txt /temp/requirements.txt

RUN apt-get update && apt-get install -y gcc libpq-dev

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r /temp/requirements.txt

COPY . /backend
WORKDIR /backend

EXPOSE 8000
