from flask import Flask,render_template
app = Flask(__name__)


@app.route('/')

@app.route('/home')
def home():
	loc=['---Select---','Benachity','Fuljhore More','BCREC']
	return render_template('index.html', len = len(loc), loc=loc)

@app.route('/map')
def testmap1():
	return render_template('testmap1.html')

if(__name__=='__main__'):
	app.run(debug=True)