let arr = [1,2,3,4,5];

//item = arr[i];
for(let item of arr){
  console.log(item);
}
//index= i;
for(let index in arr){
  console.log(index);
}
//------------------------------------------------------
//map
let new_Map_Arr = arr.map((item) => item*10); // => [10,20,30,40,50]
// const new_Map_Arr2 = arr.map((item) => {
//   return item*10 ;
// }); // => [10,20,30,40,50]
//------------------------------------------------------
//filter
let new_Filter_Arr = arr.filter((item) => item > 3); // => [4,5]
// const new_Filter_Arr2 = arr.filter((item) => {
//   return item > 3;
// }); // => [4,5]
//------------------------------------------------------
//find
let item_From_Arr = arr.find((item) => item > 3); // => 4
// const item_From_Arr2 = arr.find((item) => {
//   return item > 3;
// }); // => 4
//------------------------------------------------------
//sort
let arr2 = [1,3,5,4,2,11];
//for numbers only
arr2.sort(); // => [1,11,2,3,4,5]
//for objects
arr2.sort((a,b) => a-b) // => [1,2,3,4,5,11]
//a-b => min to max
//b-a => max to min
//------------------------------------------------------