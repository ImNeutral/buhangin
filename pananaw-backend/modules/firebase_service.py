import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
import uuid
from datetime import datetime

cred = credentials.Certificate("lib/serviceAccountKey.json")
default_app = initialize_app(cred)
db = firestore.client()

def createEntity(entity, collectionName):
    try:
        if collectionName != "metrics":
            entity["id"] = str(uuid.uuid1())   
        db.collection(collectionName).document(entity["id"]).set(entity)
        return entity
    except Exception as e:
        return f"An Error Occured: {e}" 

def updateEntity(entity, entityId, collectionName):
    try:
        db.collection(collectionName).document(entityId).update(entity)
        return entity
    except Exception as e:
        return f"An Error Occured: {e}"

def deleteEntity(entityId, collectionName):
    try:
        db.collection(collectionName).document(entityId).delete()
        return entityId
    except Exception as e:
        return f"An Error Occured: {e}"

def findEntity(entityId, collectionName):
    try:
        return db.collection(collectionName).document(entityId).get().to_dict()
    except Exception as e:
        return f"An Error Occured: {e}"

def __generateMetricId():
    return f"{datetime.now().month}-{datetime.now().year}"
   