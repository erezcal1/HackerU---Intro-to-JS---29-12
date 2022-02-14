const calc_PromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT != 0) {
      resolveT(numAT / numBT);
    }
    rejectT("Can't divide by 0");
  });
};

// const calc_Multi_TimesT = async () => {
//   let resultT = await calc_PromiseT(10, 1);
//   resultT = await calc_PromiseT(result, 2);
//   resultT = await calc_PromiseT(result, 0.5);
//   console.log("result", resultT);
// };

const calc_Multi_TimesT = async () => {
  try {
    let resultT = await calc_PromiseT(10, 1);
    resultT = await calc_PromiseT(resultT, 2);
    resultT = await calc_PromiseT(resultT, 0.5);
    console.log("result", resultT);
  } catch (errorT) {
    console.log("error", errorT);
  }
};
calc_Multi_TimesT();
//-----------------------------------------------------
//creat promise that will subtract one random number by (milliseconds %2) 2 times

const calc_Promise_RandomT = (numT) => {
  return new Promise((resolveT, rejectT) => {
    //gets the remainder of the milliseconds divided by 2
    let even_Or_OddT = new Date().getMilliseconds() % 2;
    if (even_Or_OddT) {
      resolveT(numT / even_Or_OddT);
    }
    rejectT("Can't divide by 0");
  });
};
const calc_RandomT = async () => {
  try {
    //random number
    let randomT = Math.floor(Math.random() * 100000);
    let resultT = await calc_Promise_RandomT(randomT);
    resultT = await calc_Promise_RandomT(resultT);
    console.log("result", resultT);
  } catch (errorT) {
    //fail
    console.log("error", errorT);
  }
};
calc_RandomT();
//-----------------------------------------------------
//creat promise that return a random number and gets min and max
//reject  if min is greater than max
const calc_Promise_Random_Min_MaxT = (minT, maxT) => {
  return new Promise((resolveT, rejectT) => {
    if (minT > maxT) {
      rejectT("min is greater than max");
    }
    let randomT = Math.floor(Math.random() * (maxT - minT + 1)) + minT;
    resolveT(randomT);
  });
};
const calc_Random_Min_MaxT = async () => {
  //creating min and max randomly between 1 and 100
  let minT = Math.floor(Math.random() * 100),
    maxT = Math.floor(Math.random() * 100);
  try {
    let resultT = await calc_Promise_Random_Min_MaxT(minT, maxT);
    console.log("mini max result", resultT);
  } catch (errorT) {
    //fail
    console.log("error", errorT);
  }
};

calc_Random_Min_MaxT();
