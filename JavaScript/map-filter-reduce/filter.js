function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const nums= [1, 5,20,8,98,56,55,45,12,897,312,6354,32,21,77];

console.log(filtraPares(nums));