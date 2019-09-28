from flask import Flask, jsonify
from modules import firebase_service
from modules import data_fetcher
from modules import predictor

app = Flask(__name__)

@app.route("/test")
def test():
    return jsonify(firebase_service.firebase_test())
