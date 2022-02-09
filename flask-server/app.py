from flask import Flask,request, jsonify
import pickle as pk
from flask_cors import cross_origin


with open("pickle_model",'rb') as file:
    pickle_model = pk.load(file)

app = Flask(__name__)

@app.route('/', methods=[ 'POST'])
@cross_origin()
def medical_expense():
   """POST in SERVER"""
   
   inputs = request.json['data']
   expense = pickle_model.predict([inputs])
   return jsonify(expense=f"{expense[0]}")



if __name__ == "__main__":
   app.run(debug = True)

