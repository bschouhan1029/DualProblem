FROM python:3.8-slim
WORKDIR /webapp
COPY . /webapp/
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ["python","app.py"]