from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.routing import FloatConverter

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

# Werkzeug's FloatConverter does not handle negative numbers
class SignedFloatConverter(FloatConverter):
    regex = r'-?\d+(\.\d+)?'
app.url_map.converters['float'] = SignedFloatConverter

from .models import *
from .views import *
