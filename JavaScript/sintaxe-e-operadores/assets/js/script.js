var resultWrapper = document.getElementById("result");
var btnComparar = document.getElementById("btnComparar");

var fraseFinal = "Para comparar insira os numeros! ";
resultWrapper.innerHTML = fraseFinal;

function resultado(num1,num2){  
    fraseFinal = "Os números "+ num1 +" e " + num2 ;
    fraseFinal += num1 === num2 ?  " são iguais." :  " não são iguais.";
    var soma = num1+num2;
    fraseFinal += " Sua soma é "+ soma + ",";
    fraseFinal += soma < 10 ?  " que é menor que 10" :  " que é maior que 10";
    fraseFinal += soma < 20 ?  " e menor que 20." :  " e maior que 20.";
    resultWrapper.innerHTML = fraseFinal;
}
btnComparar.addEventListener("click", comparar);    

function comparar(){
    var input1 = parseInt(document.getElementById("num1").value);
    var input2 = parseInt(document.getElementById("num2").value);
    
    if((!isNaN(input1) && input1 != null)&&(!isNaN(input2) && input2 != null)){
        resultado(input1,input2);
    }else{
        alert("INSIRA NUMEROS VALIDOS!");  
    }
   

}