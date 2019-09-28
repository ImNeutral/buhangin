import twitter
import re

# Constants
consumer_key = "fTww4ZZPy2wX9EnXT1g7zuobM"
consumer_secret = "gHqfbkYWJfIEpDzotdKTmDrMBEhUeHb1TWrFwjHQsZSyfx0XV0"
access_token_key = "1077197211497185281-KlMzZwwJihO7q4snVABjC6FfqKl4BD"
access_token_secret = "zfu8cJ5JLtjtkAemhCG5YLmOVOi2fR8CaHGjuJ8W28j4K"
base_twitter_link = "https://www.twitter.com"

# Global variables
twitter_api = None

# Classes
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
       
def __pretty(d, indent=0):
    for key, value in d.items():
        print('\t' * indent + str(key))
        if isinstance(value, dict):
            __pretty(value, indent+1)
        else:
            print('\t' * (indent+1) + str(value))

def __create_link_from_tweet(tweet):
    global base_twitter_link
    return "{}/{}/status/{}".format(base_twitter_link, tweet.user.screen_name, tweet.id)

def __create_card_from_tweet(tweet):
    tweet_link = __create_link_from_tweet(tweet)
    return Card(str(tweet.id), tweet.full_text, tweet_link, tweet.created_at)

def __init_twitter_api():
    global twitter_api
    global consumer_key
    global consumer_secret
    global access_token_key
    global access_token_secret

    twitter_api = twitter.Api(
            consumer_key=consumer_key,
            consumer_secret=consumer_secret,
            access_token_key=access_token_key,
            access_token_secret=access_token_secret
        )

def fetch():
    tweets = twitter_api.GetSearch(
            raw_query="q=%40Lamudi_PH&f=live&tweet_mode=extended&count=5")

    tweet = tweets[0]
    cards = [__create_card_from_tweet(tweet) for tweet in tweets]

    return cards

__init_twitter_api()
    