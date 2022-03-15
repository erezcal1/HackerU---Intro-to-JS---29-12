const calc_Promise = (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (numB != 0) {
      resolve(numA / numB);
    }
    reject("Can't divide by 0");
  });
};

Promise.all([calc_Promise(1, 2), calc_Promise(10, 0), calc_Promise(10, 10)])
  .then((valves) => {
    console.log(valves);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.allSettled([
  calc_Promise(1, 2),
  calc_Promise(10, 0),
  calc_Promise(10, 10),
])
  .then((valves) => {
    console.log(valves);
  })
  .catch((error) => {
    console.error(error);
  });
