from flask import Flask

app = Flask(__name__)

@app.route('/home')
def execute():
    return 'hello'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3005)