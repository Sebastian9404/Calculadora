var vala;
var valb;
var operacion;

function calculadora() {
    var contResult = document.getElementById("contResult");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var sum = document.getElementById("suma");
    var rest = document.getElementById("resta");
    var mult = document.getElementById("multiplicar");
    var div = document.getElementById("dividir");
    var borrar = document.getElementById("borrar");
    var igual = document.getElementById("igual");

    uno.onclick = function(e) {
        contResult.textContent = contResult.textContent + "1";
    }

    dos.onclick = function(e) {
        contResult.textContent = contResult.textContent + "2";
    }

    tres.onclick = function(e) {
        contResult.textContent = contResult.textContent + "3";
    }

    cuatro.onclick = function(e) {
        contResult.textContent = contResult.textContent + "4";
    }

    cinco.onclick = function(e) {
        contResult.textContent = contResult.textContent + "5";
    }

    seis.onclick = function(e) {
        contResult.textContent = contResult.textContent + "6";
    }

    siete.onclick = function(e) {
        contResult.textContent = contResult.textContent + "7";
    }

    ocho.onclick = function(e) {
        contResult.textContent = contResult.textContent + "8";
    }

    nueve.onclick = function(e) {
        contResult.textContent = contResult.textContent + "9";
    }

    cero.onclick = function(e) {
        contResult.textContent = contResult.textContent + "0";
    }

    sum.onclick = function(e) {
        vala = contResult.textContent;
        operacion = "+";
        vaciar();
    }
    rest.onclick = function(e) {
        vala = contResult.textContent;
        operacion = "-";
        vaciar();
    }
    mult.onclick = function(e) {
        vala = contResult.textContent;
        operacion = "*";
        vaciar();
    }
    div.onclick = function(e) {
        vala = contResult.textContent;
        operacion = "/";
        vaciar();
    }
    borrar.onclick = function(e) {
        resetear();
    }
    igual.onclick = function(e) {
        valorb = contResult.textContent;
        resolver();
    }

    function resolver(e) {
        var resultado = 0;
        switch (operacion) {
            case "+":
                resultado = parseFloat(vala) + parseFloat(valb);
                break;
            case "-":
                resultado = parseFloat(vala) - parseFloat(valb);
                break;
            case "*":
                resultado = parseFloat(vala) * parseFloat(valb);
                break;
            case "/":
                resultado = parseFloat(vala) / parseFloat(valb);
                break;
            default:
                break;
        }
        contResult.textContent = resultado
    }

    function vaciar() {
        contResult.textContent = "";
    }

    function resetear() {
        contResult.textContent = "";
        vala = 0;
        valb = 0;
        operacion = "";
    }

}