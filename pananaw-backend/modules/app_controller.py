from flask import Flask, request, jsonify
from modules import firebase_service
from modules import email_service

app = Flask(__name__)

## CARD ##

@app.route("/card/save", methods=["POST"])
def createCard():
    return jsonify(firebase_service.createEntity(request.json, "cards")), 200

@app.route("/card/<id>", methods=["PUT"])
def updateCardById(id):
    return jsonify(firebase_service.updateEntity(request.json, id, "cards")), 200

@app.route("/card/<id>", methods=["DELETE"])
def deleteCardById(id):
    return jsonify({"Deleted id" : firebase_service.deleteEntity(id, "cards")}), 200

## CARD ##

## METRIC ##

@app.route("/metric/save", methods=["POST"])
def createMetric():
    return jsonify(firebase_service.createEntity(request.json, "metrics")), 200

@app.route("/metric/<id>", methods=["PUT"])
def updateMetricById(id):
    return jsonify(firebase_service.updateEntity(request.json, id, "metrics")), 200

@app.route("/metric/<id>", methods=["DELETE"])
def deleteMetricById(id):
    return jsonify({"Deleted id" : firebase_service.deleteEntity(id, "metrics")}), 200

## METRIC ##

## USER ##

@app.route("/user/save", methods=["POST"])
def createUser():
    return jsonify(firebase_service.createEntity(request.json, "users")), 200

@app.route("/user/<id>", methods=["PUT"])
def updateUserById(id):
    return jsonify(firebase_service.updateEntity(request.json, id, "users")), 200

@app.route("/user/<id>", methods=["DELETE"])
def deleteUserById(id):
    return jsonify({"Deleted id" : firebase_service.deleteEntity(id, "users")}), 200

## USER ##

## EMAIL ##

@app.route("/email", methods=["POST"])
def send_email():
    sender = request.json["sender"]
    receiver = request.json["receiver"]
    title = request.json["title"]
    content = request.json["content"]

    is_sent = email_service.send_email(sender, receiver, title, content)

    return jsonify({ "sent": is_sent }), 200

## EMAIL ##
