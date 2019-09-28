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
    def __init__(self, id, content, link, date_posted, num_reacts, num_shares):
        self.id = id
        self.content = content
        self.sentiment = Sentiment.NORMAL
        self.source = Source.TWITTER
        self.link = link
        self.numShares = 0
        self.numReacts = 0
        self.status = Status.NEW
        self.year_posted = date_posted.year
        self.month_posted = date_posted.month
        self.day_posted = date_posted.day
        self.hour_posted = date_posted.hour
        self.minute_posted = date_posted.minute
        self.num_reacts = num_reacts
        self.num_shares = num_shares
