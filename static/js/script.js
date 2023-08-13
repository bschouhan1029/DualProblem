async function transform() {
    var req = {
        p1: document.getElementById("p1").value,
        p2: document.getElementById("p2").value,
        c11: document.getElementById("c11").value,
        c12: document.getElementById("c12").value,
        c13: document.getElementById("c13").value,
        op1: document.getElementById("op1").value,
        c21: document.getElementById("c21").value,
        c22: document.getElementById("c22").value,
        c23: document.getElementById("c23").value,
        op2: document.getElementById("op2").value,
        c31: document.getElementById("c31").value,
        c32: document.getElementById("c32").value,
        c33: document.getElementById("c33").value,
        op3: document.getElementById("op3").value
    }

    try {
        const res = await fetch("/transform", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(req)
        });
        const data = await res.json();
        document.getElementById("result1").textContent = data.zfDual
        document.getElementById("result2").textContent = data.constraint1
        document.getElementById("result3").textContent = data.constraint2
        document.getElementById("result4").textContent = data.zero
    } catch (error) {
        console.error("Error:",error)
    }
}