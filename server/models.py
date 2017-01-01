from server import db

class Note(db.Model):
    id = db.Column('id', db.Integer, primary_key=True)
    text = db.Column(db.Text)
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)

    def jsonify(self):
        return {
            'id': self.id,
            'text': self.text,
            'longitude': self.longitude,
            'latitude': self.latitude,
        }

    def __init__(self, text, longitude, latitude):
        self.text = text
        self.longitude = longitude
        self.latitude = latitude

    def __repr__(self):
        return "<Note @ {}-{}> {}".format(
            self.longitude,
            self.latitude,
            self.text)
