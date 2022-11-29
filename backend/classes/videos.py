from flask_restful import Resource
from flask import request

class videos(Resource): 
    def get(self): 
        return {"Data": []}

    def post(self): 
        request_info = request.get_json(force=True)
        searched = request_info["searched"]
        print(searched)
        return {"status": 200}