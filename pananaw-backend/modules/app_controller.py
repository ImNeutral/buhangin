from flask import Flask, request, jsonify
from modules import firebase_service

app = Flask(__name__)

@app.route("/user/save", methods=["POST"])
def createUser():
    return jsonify(firebase_service.createUser(request.json)), 200

@app.route("/user/<id>", methods=["GET"])
def findUserById(id):
    return jsonify(firebase_service.findUserById(id)), 200

@app.route("/user/<id>", methods=["DELETE"])
def deleteUserById(id):
    return jsonify({"User deleted id" : firebase_service.deleteUser(id)}), 200