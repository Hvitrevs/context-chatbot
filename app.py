from flask import Flask, render_template, request, jsonify

from chat import get_response

app = Flask(__name__)

def index_get():
    return render_template("base.html")