var resultWrapper = document.getElementById("result");
var resultWrapper2 = document.getElementById("result2");
var btnVerificar = document.getElementById("btnVerificar");

var result = "Para verificar insira sua frase! ";
resultWrapper.innerHTML = result;
resultWrapper2.innerHTML = result;

btnVerificar.addEventListener("click", verificar);    

function verificar(){
    var frase = document.getElementById("frase").value.trim();
    frase = frase.replace(/\s/g, '');
    console.log(frase);
    if (!frase){
        alert("INSIRA UMA FRASE VALIDA!"); 
    }else if (!frase.length){
        alert("INSIRA UMA FRASE VALIDA!"); 
    }else{
        verificaPalindromo(frase);
        verificaPalindromo2(frase);
    }
}

function verificaPalindromo(string) {
	result = string === string.split('').reverse().join('') ?  "É palindromo!" :  "Não é palindromo!";
    resultWrapper.innerHTML = result;
}


// solução 2
function verificaPalindromo2(string) {
    let naoEh;
	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
            naoEh = (true);
			resultWrapper2.innerHTML =  "Não é palindromo!";
		}
	}
    if(!naoEh){
        resultWrapper2.innerHTML =  "É palindromo!" ;
    }
	
}
