var elementoNumero = document.getElementById('numero');
var numero = 0;
console.log(elementoNumero);

function changeColor() {
    var color = document.getElementsByTagName('h1')[0].style.color;

    if(color == 'red') {
        document.getElementsByTagName('h1')[0].style.color = 'grey';
    } else {
        document.getElementsByTagName('h1')[0].style.color = 'red';
    }
}

function aumentar() {
    numero = numero + 1;
    elementoNumero.innerHTML = numero;
}

function diminuir() {
    numero = numero - 1;
    elementoNumero.innerHTML = numero;
}
