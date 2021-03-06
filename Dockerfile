FROM python:3.8

ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV dev
ENV DOCKER_CONTAINER 1

COPY ./requirements.txt /code/requirements.txt
RUN pip install -r /code/requirements.txt

COPY . /code/
WORKDIR /code/

CMD ["/usr/local/bin/uwsgi", "--ini", "verbalapi/uwsgi.ini", ]

EXPOSE 8000
