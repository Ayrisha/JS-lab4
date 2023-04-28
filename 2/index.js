function operation(){
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;

    if (x == '' || y == ''){
        document.getElementById("result").innerHTML = '';
    }
    else{
        if (document.getElementById("select").value == '+'){
            document.getElementById("result").innerHTML = x + y;
        }
        if (document.getElementById("select").value == '-'){
            document.getElementById("result").innerHTML = x - y;
        }
        if (document.getElementById("select").value == '/'){
            document.getElementById("result").innerHTML = x / y;
        }
        if (document.getElementById("select").value == '*'){
            document.getElementById("result").innerHTML = x * y;
        }
    }
}

document.getElementById("number1").addEventListener('input', operation);

document.getElementById("number2").addEventListener('input', operation);

document.getElementById("select").addEventListener('change', operation);