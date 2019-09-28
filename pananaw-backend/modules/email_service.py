from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from email.mime.text import MIMEText
import base64

# Constants
credentials_file = "lib/credentials.json"
scopes = ["https://www.googleapis.com/auth/gmail.send"]

def __create_message(sender, to, subject, message_text):
    message = MIMEText(message_text)
    message["to"] = to
    message["from"] = sender
    message["subject"] = subject

    raw = base64.urlsafe_b64encode(message.as_bytes())
    raw = raw.decode()
    body = {"raw": raw}
    return body

def send_email(sender, receiver, title, content):
    global scopes

    creds = None
    
    pickle_filename = "{}.pickle".format(sender)
    if os.path.exists(pickle_filename):
        with open(pickle_filename, 'rb') as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                    credentials_file, scopes)

            """   
            flow.redirect_uri = "http://localhost:5000/oauth/"
            auth_url, _ = flow.authorization_url(prompt='consent')
            code = input('Enter whatever')
            flow.fetch_token(code=code)
            creds = flow.credentials
            """
            
            creds = flow.run_local_server(port=0)

        with open(pickle_filename, "wb") as token:
            pickle.dump(creds, token)

    service = build("gmail", "v1", credentials=creds)

    try:
        body = __create_message(sender, receiver, title, content)
        result = service.users().messages().send(userId="me", body=body).execute()
        
        return True
    except Exception as e:
        return False
