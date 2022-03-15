let user_Obj = {
  name: "kenny",
  age: 7
}

//spread operator
let new_User_Obj = {...user_Obj};

let arr = [1,2,3,4,5];

let newArr = [...arr]; // => [1,2,3,4,5]

// let newArr = arr; // => [5,2,3,4,5]
newArr[0] = 5;

//------------------------------------------------------
//object destructuring
//old way
// const name = user_Obj.name;
// const age = user_Obj.age;

//new way
let {name, age} = user_Obj;
console.log("name:", name); // => kenny
console.log("age:", age); // => 7


//------------------------------------------------------
//for loops
//old way
//let arr_Length = arr.length; // => better way then arr.length in an array
// for(let i = 0; i < arr_Length; i++) {
//   console.log(arr[i]);
// }

//new way
for(let item of arr) {
  console.log(item);
}
//------------------------------------------------------
//switch cases / default parameters
const calc = (num1 = 0, num2 = 0, op ='+') => {
  if (op === '+') {
    return num1 + num2;
  }
  if (op === '-') {
    return num1 - num2;
  }
  if (op === '*') {
    return num1 * num2;
  }
  if (op ==='/') {
    return num1 / num2;
  }
}

const calc_Switch = (num1 = 0, num2 = 0, op ='+') => {
  switch (op) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2
    case '+':
    default:
      return num1 + num2;    
  }
}
console.log(calc(1,0,'/'));
//------------------------------------------------------
//object destructuring in function
const obj_Dest= ({name, age}) => {
  console.log(name, age);
};
obj_Dest(user_Obj);
//------------------------------------------------------
