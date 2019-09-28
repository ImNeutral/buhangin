from flask import Flask, request, jsonify
from modules import firebase_service

app = Flask(__name__)

@app.route("/user/save", methods=["POST"])
def createUser():
    return jsonify(firebase_service.createUser(request.json)), 200

@app.route("/user/<id>", methods=["GET"])
def findUserById(id):
    return id

@app.route("/user/<id>", methods=["PUT"])
def updateUserById(id):
    return jsonify(firebase_service.updateUser(request.json, id)), 200

@app.route("/user/<id>", methods=["DELETE"])
def deleteUserById(id):
    return request.data