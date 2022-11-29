from flask import Flask
from flask_restful import Api
from classes.videos import videos

from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

api.add_resource(videos, "/videos")

app.run(debug=True)