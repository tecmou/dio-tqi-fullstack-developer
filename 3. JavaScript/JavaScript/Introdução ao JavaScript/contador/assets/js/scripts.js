var buttonAdicionar = document.getElementsByName("adicionar")[0];
var buttonSubtrair = document.getElementsByName("subtrair")[0];

buttonAdicionar.addEventListener("click", increment, false);
buttonSubtrair.addEventListener("click", decrement, false);

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    if(currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber == 0) {
        currentNumberWrapper.style.color = "black";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) {    
        currentNumberWrapper.style.color = "red";
    }    
}