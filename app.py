from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template("projects.html")

@app.route('/certifications')
def certifications():
    return render_template("certifications.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/blog')
def blog():
    return render_template("blog.html")  # Optional

if __name__ == "__main__":
    app.run(debug=True)
