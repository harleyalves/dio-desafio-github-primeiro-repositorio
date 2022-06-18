function trataErro(arr,num){
    try{
        if(!arr && !num) 
            throw new ReferenceError("Envie os parametros");
        if(typeof arr !== 'object')
            throw new TypeError("Array não é do tipo object");
        if(typeof num !== 'number') 
            throw new TypeError("Numero não é do tipo number");
        if(arr.length !== num) 
            throw new RangeError("Tamanho invalido");
        return arr;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("Este é um ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError){
            console.log("Este é um TypeError");     
            console.log(e.message);
        }
        else if (e instanceof RangeError){
            console.log("Este é um RangeError");
            console.log(e.message);
        }
        else{
            console.log("Tipo de erro não esperado" + e);
        }
    }
}
console.log('teste ReferenceError');
console.log(trataErro());
console.log('teste typeError');
console.log(trataErro(5,5));
console.log('teste typeError');
console.log(trataErro([],'5'));
console.log('teste RangeError');
console.log(trataErro([1],5));
console.log('teste sem erro');
console.log(trataErro([0,1,2,3,4],5));