from keras.models import load_model
from keras.preprocessing import sequence
from keras.preprocessing.text import Tokenizer
from modules.classes import Sentiment 
import tensorflow as tf

# Files
vocabulary_file = "lib/vocab.txt"
model_file = "lib/trained.model"
graph = None

# Constants
max_len = 50

# Global variables
model = None
tokenizer = None

def __init_tokenizer():
    global tokenizer
    global vocabulary_file

    tokenizer = Tokenizer()

    # Load all words.
    vocabulary = []
    with open(vocabulary_file, "r", encoding="utf8") as v:
        vocabulary = v.readlines()

    # Assign integer ids for each word.
    tokenizer.fit_on_texts(vocabulary)

def __init_model():
    global model
    global graph
    model = load_model(model_file)
    graph = tf.get_default_graph()

def predict(text):
    global model
    global vocabulary
    global tokenizer
    global max_len
    global graph

    text = text.lower()
    text_ids = tokenizer.texts_to_sequences([text])
    padded_text_ids = sequence.pad_sequences(text_ids, maxlen=max_len)

    with graph.as_default():
        prediction = model.predict(padded_text_ids)

        print(prediction)
        if (prediction >= 0.75):
            return Sentiment.GOOD
        elif (prediction < 0.75 and prediction > 0.25):
            return Sentiment.NORMAL
        else:
            return Sentiment.BAD

__init_model()
__init_tokenizer()
