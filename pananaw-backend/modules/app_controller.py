from flask import Flask, request, jsonify
from modules import firebase_service

app = Flask(__name__)

## CARD ##

@app.route("/card/save", methods=["POST"])
def createCard():
    firebase_service.collectionName = "cards"
    return jsonify(firebase_service.createEntity(request.json)), 200

@app.route("/card/<id>", methods=["PUT"])
def updateCardById(id):
    firebase_service.collectionName = "cards"
    return jsonify(firebase_service.updateEntity(request.json, id)), 200

@app.route("/card/<id>", methods=["DELETE"])
def deleteCardById(id):
    firebase_service.collectionName = "cards"
    return jsonify({"Deleted id" : firebase_service.deleteEntity(id)}), 200

## CARD ##

## METRIC ##

@app.route("/metric/save", methods=["POST"])
def createMetric():
    firebase_service.collectionName = "metrics"
    return jsonify(firebase_service.createEntity(request.json)), 200

@app.route("/metric/<id>", methods=["PUT"])
def updateMetricById(id):
    firebase_service.collectionName = "metrics"
    return jsonify(firebase_service.updateEntity(request.json, id)), 200

@app.route("/metric/<id>", methods=["DELETE"])
def deleteMetricById(id):
    firebase_service.collectionName = "metrics"
    return jsonify({"Deleted id" : firebase_service.deleteEntity(id)}), 200

## METRIC ##

## USER ##

@app.route("/user/save", methods=["POST"])
def createUser():
    firebase_service.collectionName = "users"
    return jsonify(firebase_service.createEntity(request.json)), 200

@app.route("/user/<id>", methods=["PUT"])
def updateUserById(id):
    firebase_service.collectionName = "users"
    return jsonify(firebase_service.updateEntity(request.json, id)), 200

@app.route("/user/<id>", methods=["DELETE"])
def deleteUserById(id):
    firebase_service.collectionName = "users"
    return jsonify({"Deleted id" : firebase_service.deleteEntity(id)}), 200

## USER ##