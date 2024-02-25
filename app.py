from flask import Flask, render_template, request, jsonify

from chat import get_response

app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("base.html")

@app.post("/predict")
def predict():
    text = request.get.json().get("message")
    # check if the text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

