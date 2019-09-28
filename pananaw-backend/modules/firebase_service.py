import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
import uuid

cred = credentials.Certificate("lib/serviceAccountKey.json")
default_app = initialize_app(cred)
db = firestore.client()

user_ref = db.collection('users')

def createUser(user):
    user["id"] = str(uuid.uuid1())
    return user_ref.document(user["id"]).set(user)
