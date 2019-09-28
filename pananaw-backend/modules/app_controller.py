from flask import Flask, request, jsonify
from modules import firebase_service

app = Flask(__name__)

@app.route("/user/save", methods=["POST"])
def createUser():
    return firebase_service.createUser(request.json)

@app.route("/user/<id>", methods=["GET"])
def findUserById(id):
    return id

@app.route("/user/<id>", methods=["PUT"])
def updateUserById(id):
    return request.data

@app.route("/user/<id>", methods=["DELETE"])
def deleteUserById(id):
    return request.data