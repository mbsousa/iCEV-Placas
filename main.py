from flask import Flask 

app = Flask(__name__, static_url_path='/static')

from app.routes import * 

if __name__ == '__main__':
    app.run(debug=True)