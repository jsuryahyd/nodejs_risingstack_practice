function sum(arr){
// console.log(arr);
    return arr.reduce(function(sum,item){
    return sum+item;
},0);
}

module.exports.sum = sum;