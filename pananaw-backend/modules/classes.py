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
    def __init__(self, id, content, link, yearPosted, monthPosted, dayPosted, hourPosted, minutesPosted):
        self.id = id
        self.content = content
        self.sentiment = Sentiment.NORMAL
        self.source = Source.TWITTER
        self.link = link
        self.numShares = 0
        self.numReacts = 0
        self.yearPosted = yearPosted
        self.monthPosted = monthPosted
        self.dayPosted = dayPosted
        self.hourPosted = hourPosted
        self.minutesPosted = minutesPosted
        self.status = Status.NEW

class User:
    def __init__(self, id, name, email, contacts):
        self.id = id
        self.name = name
        self.contacts = contacts # [‘bea@gmail.com’, ‘ian@gmail.com’]
        self.email = email

class Metrics:
    def __init__(self, id, year, month, pie, mentions, actedItems, interactions):
        self.id = id
        self.year = year
        self.month = month
        self.pie = pie # json={ 'good': 50, 'bad': 20, 'normal': 30}
        self.mentions = mentions
        self.actedItems = actedItems
        self.interactions = interactions