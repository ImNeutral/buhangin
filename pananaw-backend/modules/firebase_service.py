import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
import uuid

cred = credentials.Certificate("lib/serviceAccountKey.json")
default_app = initialize_app(cred)
db = firestore.client()

user_ref = db.collection('users')

def createUser(user):
    user["id"] = str(uuid.uuid1())
    try:
        user_ref.document(user["id"]).set(user)
        return user
    except Exception as e:
        return f"An Error Occured: {e}" 

def updateUser(user, userId):
    try:
        user_ref.document(userId).update(user)
        return user
    except Exception as e:
        return f"An Error Occured: {e}" 
