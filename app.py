from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/transform", methods=["GET","POST"])
def transform():
    if request.method == "POST":
        data = request.get_json()

        zfDual = "min z_d = " + data["c13"] + "u1 + " + data["c23"] + "u2 + " + data["c33"] + "u3"
        constraint1 = data["c11"] + "u1 + " + data["c21"] + "u2 + " + data["c31"] + "u3" + " <= " + data["p1"]
        constraint2 = data["c12"] + "u1 + " + data["c22"] + "u2 + " + data["c32"] + "u3" + " <= " + data["p2"]
        zero = "u_1,2,3 >= 0"

        return jsonify({
            "zfDual": zfDual, 
            "constraint1": constraint1, 
            "constraint2": constraint2, 
            "zero": zero
        })
    
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
