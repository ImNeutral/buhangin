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
            "yearPosted" : self.year_posted,
            "monthPosted" : self.month_posted,
            "dayPosted" : self.day_posted,
            "hourPosted" : self.hour_posted,
            "minutePosted" : self.minute_posted,
            "numMentions" : self.num_mentions,
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
        self.actedItems = 0

    def to_dict(self):
        return {
            "id" : self.id,
            "year" : self.year,
            "month" : self.month,
            "good" : self.good,
            "normal" : self.normal,
            "bad" : self.bad,
            "mentions" : self.mentions,
            "actedItems": self.actedItems
        }

    def to_obj(self, metric_dict):
        self.id = metric_dict["id"]
        self.year = metric_dict["year"]
        self.month = metric_dict["month"]
        self.good = metric_dict["good"]
        self.normal = metric_dict["normal"]
        self.bad = metric_dict["bad"]
        self.mentions = metric_dict["mentions"]
        self.actedItems = metric_dict["actedItems"]

    def incrementStatusCount(self, status): 
        if status == "normal":
            self.normal = self.normal + 1
        elif status == "good":
            self.good = self.good + 1
        else:
            self.bad = self.bad + 1


class Rank:
    def __init__(self, location):
        self.id = self.__generateId(location)
        self.good = 0
        self.location = location
        self.month = datetime.now().month
        self.year = datetime.now().year

    def to_dict(self):
        return {
            "id" : self.id,
            "location" : self.location,
            "good" : self.good,
            "month" : self.month,
            "year" : self.year
        }

    def to_obj(self, rank_dict):
        self.id = rank_dict["id"]
        self.location = rank_dict["location"]
        self.good = rank_dict["good"]
        self.month = rank_dict["month"]
        self.year = rank_dict["year"]

    def incrementGoodCount(self, location):
        if (location == self.location and self.__generateId(location) == self.id):
            self.good += 1

    def __generateId(self, location):
        monthYear = f"{datetime.now().month}-{datetime.now().year}"
        if location is None:
            return f"{monthYear}-Others"
        else:
            return f"{monthYear}-{location.replace(' ', '-')}"