const calc_Promise = (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (numB != 0) {
      resolve(numA / numB);
    }
    reject("Can't divide by 0");
  });
};

calc_Promise(10, 1)
  .then((result) => {
    calc_Promise(result, 2)
      .then((result1) => {
        calc_Promise(result1, 0.5)
          .then((result2) => {
            console.log(result2);
          })
          .catch((error2) => {
            console.log(error2);
          });
      })
      .catch((error1) => {
        console.log(error1);
      });
  })
  .catch((error) => {
    console.log(error);
  });
