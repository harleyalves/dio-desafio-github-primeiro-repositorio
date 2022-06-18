var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var btnAdcionar = document.getElementById("btnAdcionar")
var btnSubtrair = document.getElementById("btnSubtrair")

btnAdcionar.addEventListener("click", increment);
btnSubtrair.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    numberColor(currentNumber);
    limits(currentNumber);
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    numberColor(currentNumber);
    limits(currentNumber);
}
function limits(currentNumber){
    if (currentNumber == -10) {
        btnSubtrair.disabled = true;
        btnSubtrair.style.backgroundColor= 'lightgray';
    }   
    else if (currentNumber == 10) {
        btnAdcionar.disabled = true;
        btnAdcionar.style.backgroundColor= 'lightgray';
    }else{
        btnSubtrair.disabled = false;
        btnAdcionar.disabled = false;
        btnSubtrair.style.backgroundColor= 'rgb(241, 214, 214)';  
        btnAdcionar.style.backgroundColor= 'rgb(241, 214, 214)';
    }
}
function numberColor(currentNumber) {
    if (currentNumber < 0){
        currentNumberWrapper.style.color= 'red';
    }else if (currentNumber > 0){
        currentNumberWrapper.style.color= 'blue';
    }else{
        currentNumberWrapper.style.color= 'black';
    }
}