const calc_Promise = (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (numB != 0) {
      resolve(numA / numB);
    }
    reject("Can't divide by 0");
  });
};

calc_Promise(2, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
