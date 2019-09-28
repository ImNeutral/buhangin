from flask import Flask, jsonify
import firebase_admin
from firebase_admin import credentials, firestore, initialize_app

cred = credentials.Certificate("serviceAccountKey.json")
default_app = initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/test")
def firebase_test():
    return jsonify(db.collection("tests").document("GPSRPAgJPcllQNCeu1UN").get().to_dict())

if __name__ == '__main__':
    app.run()