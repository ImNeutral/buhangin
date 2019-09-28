import firebase_admin
from firebase_admin import credentials, firestore, initialize_app

cred = credentials.Certificate("serviceAccountKey.json")
default_app = initialize_app(cred)
db = firestore.client()

def firebase_test():
    return db.collection("tests").document("GPSRPAgJPcllQNCeu1UN").get().to_dict()