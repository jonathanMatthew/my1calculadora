var segundotexto = false;
var operador = "";

function Sumar() {
    segundotexto = true;
    operador = "+";
}
function Restar() {
    segundotexto = true;
    operador = "-";  
}
function Multiplicar() {
    segundotexto = true;
    operador = "*";
}
function Dividir() {
    segundotexto = true;
    operador = "/";
}
function Escribir(numBoton) {
    if (!segundotexto) {
        txtNum1.value += numBoton;
    }
    if (segundotexto) {
        txtNum2.value += numBoton;
    }
}
function operacion() {

    switch (operador) {
        case "+":
            alert("el resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)))
            break;
        case "-":
            alert("el resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)))
            break;
        case "*":
            alert("el resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)))
            break;
        case "/":
            alert("el resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)))
            break;
        default:
            break;
    }
}
function borrar() {
    txtNum1.value = "";
    txtNum2.value = "";
    segundotexto =false;
    operador = "";
}
