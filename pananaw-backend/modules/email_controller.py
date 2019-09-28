from flask import Flask, jsonify, request
from modules import email_service

app = Flask(__name__)

@app.route("/email", methods=["POST"])
def send_email():
    json_data = request.get_json()
    sender = json_data["sender"]
    receiver = json_data["receiver"]
    title = json_data["title"]
    content = json_data["content"]

    is_sent = email_service.send_email(sender, receiver, title, content)

    return jsonify({ "sent": is_sent })
