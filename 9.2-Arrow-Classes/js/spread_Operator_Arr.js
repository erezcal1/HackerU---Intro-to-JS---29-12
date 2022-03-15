let arr = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
let arr3 = [6,7,8,9,10];

//copy multiple arrays and add new property
let arr13 = [...arr, ...arr3];

let arr12 = [...arr, ...arr2];
console.log(arr12);

//push to array => end of array
arr = [...arr, 6,7,8,9,10];

//unshift to array => start of array
arr = [6,7,8,9,10, ...arr];

