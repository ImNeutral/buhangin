import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
import uuid

cred = credentials.Certificate("lib/serviceAccountKey.json")
default_app = initialize_app(cred)
db = firestore.client()

collectionName = ""

def createEntity(entity):
    try:
        entity["id"] = str(uuid.uuid1())
        db.collection(collectionName).document(entity["id"]).set(entity)
        return entity
    except Exception as e:
        return f"An Error Occured: {e}" 

def updateEntity(entity, entityId):
    try:
        db.collection(collectionName).document(entityId).update(entity)
        return entity
    except Exception as e:
        return f"An Error Occured: {e}"

def deleteEntity(entityId):
    try:
        db.collection(collectionName).document(entityId).delete()
        return entityId
    except Exception as e:
        return f"An Error Occured: {e}"
