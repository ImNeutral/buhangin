from flask import Flask, request, jsonify
from modules import firebase_service
from modules import email_service
from modules import data_fetcher
from modules import predictor
from modules.classes import Metric
from modules.classes import Rank

app = Flask(__name__)

## PREDICTOR ##

@app.route("/find-sentiments/<userId>", methods=["POST"])
def findSentimentsByUserId(userId):
    user = firebase_service.findEntity(userId, "users")
    cards = data_fetcher.fetch(user["handler"], __getLatestPostId())

    metric_id = firebase_service.__generateId()
    metric_dict = firebase_service.findEntity(metric_id, "metrics")
    metric = Metric()
    
    if metric_dict is None:
        firebase_service.createEntity(metric.to_dict(), "metrics")
    else:
        metric.to_obj(metric_dict)

    if len(cards) > 0:
        latest_id = cards[0].id
        __createFile(latest_id)

        for card in cards:
            card.sentiment = predictor.predict(card.content)
            metric.incrementStatusCount(card.sentiment)
            firebase_service.createEntity(card.to_dict() , "cards")

            rank_id = firebase_service.__generateId()
            # rank_dict = firebase_service.findEntity(rank_id, "ranks")
            # rank = Rank(card.location)

            # if rank_dict is None:
            #     firebase_service.createEntity(metric.to_dict(), "ranks")
            # else:
            #     rank.to_obj(rank_dict)
            #     rank.incrementGoodCount(card.location)
            #     firebase_service.updateEntity(rank.to_dict(), rank.id, "ranks")
    else:
        metric.to_obj(metric_dict)
        
        firebase_service.updateEntity(metric.to_dict(), metric.id, "metrics")

    return jsonify({"success" : True}), 200
        

## PREDICTOR ##

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

def __createFile(latest_id):
    f = open("lib/latest-post-id.txt", 'w')
    f.write(latest_id)
    f.close()

def __getLatestPostId():
    f = open("lib/latest-post-id.txt", "r")
    content = f.read()
    f.close()
    return content
