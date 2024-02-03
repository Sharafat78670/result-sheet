function calculate() {

    var a = parseInt(document.getElementById('sub-one').value);
    var b = parseInt(document.getElementById('sub-two').value);
    var c = parseInt(document.getElementById('sub-three').value);
    var d = parseInt(document.getElementById('sub-four').value);
    var e = parseInt(document.getElementById('sub-five').value);

    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
        alert("Please enter correct value.")
    }
    else {

        // Obtain Mark Section

        var obtainMark = a + b + c + d + e;
        document.getElementById('obtain').innerHTML = obtainMark;

        // Percentage Section

        var pre = obtainMark / 500 * 100;
        document.getElementById('pre').innerHTML = pre.toFixed(2);
        document.getElementById('percent').textContent="%";

        // Grade Section

        if (pre >= 80 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('grade').textContent = "A+"
        }
        else if (pre >= 70 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('grade').textContent = "A"
        }
        else if (pre >= 60 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('grade').textContent = "A-"
        }
        else if (pre >= 50 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('grade').textContent = "B"
        }
        else if (pre >= 40 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('grade').textContent = "C"
        }
        else if (pre >= 33 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('grade').textContent = "D"
        }
        else {
            document.getElementById('grade').textContent = "F"
        }

        // Remark Section
        if (pre >= 33 && a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33) {
            document.getElementById('remark').textContent = "Pass";

            document.getElementById('hypen').textContent="";
            document.getElementById('fail').textContent="";
            document.getElementById('sub_fail').textContent="" ;
            
        }
        else {
            document.getElementById('remark').textContent = "Fail";
             failSub = [a, b, c, d, e];
             element = [];
            for (let i = 0; i < failSub.length; i++) {
                if (failSub[i] >= 33) {
                    continue; 
                }
                element.push(failSub[i]);   

            }
                document.getElementById('hypen').textContent="-";
                document.getElementById('fail').innerHTML=element.length;
                document.getElementById('sub_fail').textContent="Sub" ;
                   
         }   
       
    }

}