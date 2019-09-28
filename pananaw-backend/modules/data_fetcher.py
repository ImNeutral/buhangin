import twitter
import urllib
from datetime import datetime, timedelta
from modules.classes import Card

# Constants
consumer_key = "fTww4ZZPy2wX9EnXT1g7zuobM"
consumer_secret = "gHqfbkYWJfIEpDzotdKTmDrMBEhUeHb1TWrFwjHQsZSyfx0XV0"
access_token_key = "1077197211497185281-KlMzZwwJihO7q4snVABjC6FfqKl4BD"
access_token_secret = "zfu8cJ5JLtjtkAemhCG5YLmOVOi2fR8CaHGjuJ8W28j4K"
base_twitter_link = "https://www.twitter.com"
tweet_date_format = "%a %b %d %H:%M:%S %z %Y"
tweets_per_query = 100

# Global variables
twitter_api = None
       
def __pretty(d, indent=0):
    for key, value in d.items():
        print('\t' * indent + str(key))
        if isinstance(value, dict):
            __pretty(value, indent+1)
        else:
            print('\t' * (indent+1) + str(value))

def __create_datetime_from_tweet(tweet):
    global tweet_date_format
    date = datetime.strptime(
        tweet.created_at, tweet_date_format)

    return date

def __create_link_from_tweet(tweet):
    global base_twitter_link
    return "{}/{}/status/{}".format(base_twitter_link, tweet.user.screen_name, tweet.id)

def __create_card_from_tweet(tweet):
    tweet_date = __create_datetime_from_tweet(tweet)
    tweet_link = __create_link_from_tweet(tweet)
    return Card(str(tweet.id), tweet.full_text, tweet_link, 
            tweet_date, tweet.favorite_count, tweet.retweet_count)

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

def __is_not_self_tweet(query):
    def __is_not_self_tweet_util(tweet):
        return not "@{}".format(tweet.user.screen_name) == query
    return __is_not_self_tweet_util

def __is_high_follower_count(tweet):
    return tweet.user.followers_count > 100

def __is_new_account(tweet):
    create_date = datetime.strptime(
        tweet.user.created_at, tweet_date_format)
    
    threshold_date = datetime.now(create_date.tzinfo) - timedelta(days=30)
    return create_date <= threshold_date

def fetch(query):
    global tweets_per_query

    raw_query = urllib.parse.urlencode({
        "q": query,
        "f": "live",
        "tweet_mode": "extended",
        "count": tweets_per_query 
    })

    tweets = twitter_api.GetSearch(raw_query=raw_query)

    # Filter tweets
    tweets = list(filter(__is_not_self_tweet(query), tweets))
    tweets = list(filter(__is_high_follower_count, tweets))
    tweets = list(filter(__is_new_account, tweets))
    
    cards = [__create_card_from_tweet(tweet) for tweet in tweets]
    return cards

__init_twitter_api()