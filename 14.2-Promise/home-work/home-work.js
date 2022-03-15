//class Work:
//create 2 vars and with promise divide them

let a = 2,
  b = 4;
const promise_Calc = () => {
  return new Promise((resolve, reject) => {
    if (b != 0) {
      resolve(a / b);
    }
    reject("Error");
  });
};

const promise_Calc_call = async () => {
  try {
    let result = await promise_Calc();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
promise_Calc_call();

//-----------------------------------------------------
//creat promise that will subtract one random number by (milliseconds %2) 2 times

const calc_Promise_Random = (num) => {
  return new Promise((resolve, reject) => {
    let mili = new Date().getMilliseconds() % 2;
    if ((mili = 0)) {
      reject("Can't divide by 0");
    }
    resolve(num / mili);
  });
};

const calc_Random = async () => {
  try {
    let random = Math.floor(Math.random() * 100);
    let result = await calc_Promise_Random(random);
    result = await calc_Promise_Random(random);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
calc_Random();
//-----------------------------------------------------
//creat promise that return a random number and gets min and max
//reject  if min is greater than max
const calc_Min_Max = (min, max) => {
  return new Promise((resolve, reject) => {
    if (min > max) {
      reject("Min is greater than max");
    }
    resolve(Math.floor(Math.random() * (max - min + 1)) + min);
  });
};
const calc_Random_Min_Max = async () => {
  try {
    let min = 40,
      max = 100;
    let result = await calc_Min_Max(min, max);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
calc_Random_Min_Max();
