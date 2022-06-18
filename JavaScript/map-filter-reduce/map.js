const laranja = {
	preco: 2,
};

const maca = {
	preco: 1.5,
};
const nums = [1, 2, 3, 4, 5];

function mapComThis(array, thisArg) {
	
	return array.map(function (item) {
		return item * this.preco;
	}, thisArg);
}
console.log('Map Com this');
console.log(mapComThis(nums,maca));
console.log(mapComThis(nums,laranja));

// MAP SEM THIS

function MapSemThis(arr){
    return arr.map(function(item){
        return item*2;
    });
}
console.log('Map sem this');
console.log(MapSemThis(nums));
console.log(nums);