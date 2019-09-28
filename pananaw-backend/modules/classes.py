from datetime import datetime

class Source:
    TWITTER = "twitter"
    # FACEBOOK = "facebook"
    # INSTAGRAM = "instagram"

class Sentiment:
    GOOD = "good"
    BAD = "bad"
    NORMAL = "normal"

class Status:
    NEW = "new"
    ARCHIVED = "archived"
    PENDING = "pending"
    DONE = "done"

class Card:
    def __init__(self, id, content, link, date_posted, num_mentions, location):
        self.id = id
        self.content = content
        self.sentiment = Sentiment.NORMAL
        self.source = Source.TWITTER
        self.link = link
        self.status = Status.NEW
        self.year_posted = date_posted.year
        self.month_posted = date_posted.month
        self.day_posted = date_posted.day
        self.hour_posted = date_posted.hour
        self.minute_posted = date_posted.minute
        self.num_mentions = num_mentions
        self.location = location

    def to_dict(self):
        return {
            "id" : self.id,
            "content" : self.content,
            "sentiment" : self.sentiment,
            "source" : self.source,
            "link" : self.link,
            "status" : self.status,
            "year_posted" : self.year_posted,
            "month_posted" : self.month_posted,
            "day_posted" : self.day_posted,
            "hour_posted" : self.hour_posted,
            "minute_posted" : self.minute_posted,
            "num_mentions" : self.num_mentions,
            "location" : self.location
        }

class Metric:
    def __init__(self):
        self.id = f"{datetime.now().month}-{datetime.now().year}"
        self.year = datetime.now().year
        self.month = datetime.now().month
        self.good = 0
        self.normal = 0
        self.bad = 0
        self.mentions = 0

    def to_dict(self):
        return {
            "id" : self.id,
            "year" : self.year,
            "month" : self.month,
            "good" : self.good,
            "normal" : self.normal,
            "bad" : self.bad,
            "mentions" : self.mentions,
        }

    def incrementStatusCount(self, status):
        print(self.bad)       
        if status == "normal":
            self.normal = self.normal + 1
        elif status == "good":
            self.good = self.good + 1
        else:
            self.bad = self.bad + 1

