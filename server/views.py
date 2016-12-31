from server import app
from .models import Note
from flask import request
import json

@app.route('/notes', methods=['GET'])
def get_nearby_notes():
    notes = Note.query.all()
    return json.dumps([note.jsonify() for note in notes])
