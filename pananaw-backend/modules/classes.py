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
    def __init__(self, id, content, link, date_posted):
        self.id = id
        self.content = content
        self.date_posted = date_posted
        self.sentiment = Sentiment.NORMAL
        self.source = Source.TWITTER
        self.link = link
        self.numShares = 0
        self.numReacts = 0
        self.status = Status.NEW