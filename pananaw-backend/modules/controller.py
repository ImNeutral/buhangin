from flask import Flask, jsonify
from modules import firebase_service

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify(firebase_service.firebase_test())
