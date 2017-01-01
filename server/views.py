from server import app, db
from .models import Note
from flask import request
import json

NEARBY_DISTANCE = 0.001

@app.route('/notes', methods=['GET'])
def get_nearby_notes():
    longitude = float(request.args.get('longitude'))
    latitude = float(request.args.get('latitude'))
    all_notes = Note.query.all()
    notes = [note for note in all_notes if
        (note.longitude - longitude) ** 2 +
        (note.latitude - latitude) ** 2 <=
        NEARBY_DISTANCE ** 2]
    return json.dumps([note.jsonify() for note in notes])


@app.route('/notes', methods=['POST'])
def new_note():
    text = request.form.get('text')
    longitude = float(request.form.get('longitude'))
    latitude = float(request.form.get('latitude'))
    new_note = Note(text, longitude, latitude)
    db.session.add(new_note)
    db.session.commit()
    return json.dumps(new_note.jsonify())
