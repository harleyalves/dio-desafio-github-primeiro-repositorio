function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        console.log({ prev });
        console.log({ current});
        return prev+current;
    });
}

const nums =[ 1, 2, 3, 4];
console.log('Soma Numeros');
console.log(somaNumeros(nums));

/// calcular saldo 
function calculaSaldo(saldo, lista) {
	if (!saldo || !lista || !lista.length) return 'Envie todos os parâmetros';
    return lista.reduce(function (prev, current, index){
        console.log('Rodada', index + 1);
        console.log({ prev });
        console.log({ current});
        return prev-current.preco;
    },saldo)
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log('Calcula Saldo')
console.log(calculaSaldo(saldo, lista));