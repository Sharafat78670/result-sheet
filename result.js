function calculate() {

    var a = parseInt(document.getElementById('sub-one').value);
    var b = parseInt(document.getElementById('sub-two').value);
    var c = parseInt(document.getElementById('sub-three').value);
    var d = parseInt(document.getElementById('sub-four').value);
    var e = parseInt(document.getElementById('sub-five').value);

    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
        alert("Please enter correct value.")
    }
    else{

        // Obtain Mark Section

        var obtainMark=a+b+c+d+e;
        document.getElementById('obtain').innerHTML=obtainMark;

        // Percentage Section

        var pre = obtainMark/500*100;
        document.getElementById('pre').innerHTML=pre.toFixed(2);

        // Grade Section

        if (pre >=90) {
            document.getElementById('grade').textContent="A+"
        }
        else if (pre >=80) {
            document.getElementById('grade').textContent="A"
        }
        else if (pre >=70) {
            document.getElementById('grade').textContent="A-"
        }
        else if (pre >=60) {
            document.getElementById('grade').textContent="B"
        }
        else if (pre >=50) {
            document.getElementById('grade').textContent="C"
        }
        else if (pre >=40) {
            document.getElementById('grade').textContent="D"
        }
        else{
            document.getElementById('grade').textContent="F"
        }

        // Remark Section
        if (pre >=40) {
            document.getElementById('remark').textContent="Pass"
            // .innerHTML=<span style='color:green;'><b>Pass</b></span>
        }
        else {
            document.getElementById('remark').textContent="Fail"
        }
    }
    
}