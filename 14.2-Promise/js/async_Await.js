const calc_Promise = (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (numB != 0) {
      resolve(numA / numB);
    }
    reject("Can't divide by 0");
  });
};

// const calc_Multi_Times = async () => {
//   let result = await calc_Promise(10, 1);
//   result = await calc_Promise(result, 2);
//   result = await calc_Promise(result, 0.5);
//   console.log("result", result);
// };

const calc_Multi_Times = async () => {
  try {
    let result = await calc_Promise(10, 1);
    result = await calc_Promise(result, 2);
    result = await calc_Promise(result, 0.5);
    console.log("result", result);
  } catch (error) {
    console.log("error", error);
  }
};
calc_Multi_Times();
//-----------------------------------------------------
//creat promise that will subtract one random number by (milliseconds %2) 2 times

const calc_Promise_Random = (num) => {
  return new Promise((resolve, reject) => {
    //gets the remainder of the milliseconds divided by 2
    let even_Or_Odd = new Date().getMilliseconds() % 2;
    if (even_Or_Odd) {
      resolve(num / even_Or_Odd);
    }
    reject("Can't divide by 0");
  });
};
const calc_Random = async () => {
  try {
    //random number
    let random = Math.floor(Math.random() * 100000);
    let result = await calc_Promise_Random(random);
    result = await calc_Promise_Random(result);
    console.log("result", result);
  } catch (error) {
    //fail
    console.log("error", error);
  }
};
calc_Random();
//-----------------------------------------------------
//creat promise that return a random number and gets min and max
//reject  if min is greater than max
const calc_Promise_Random_Min_Max = (min, max) => {
  return new Promise((resolve, reject) => {
    if (min > max) {
      reject("min is greater than max");
    }
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    resolve(random);
  });
};
const calc_Random_Min_Max = async () => {
  //creating min and max randomly between 1 and 100
  let min = Math.floor(Math.random() * 100),
    max = Math.floor(Math.random() * 100);
  try {
    let result = await calc_Promise_Random_Min_Max(min, max);
    console.log("mini max result", result);
  } catch (error) {
    //fail
    console.log("error", error);
  }
};

calc_Random_Min_Max();
