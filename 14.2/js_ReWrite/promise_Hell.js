const calc_PromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT != 0) {
      resolveT(numAT / numBT);
    }
    rejectT("Can't divide by 0");
  });
};

calc_PromiseT(10, 1)
  .then((resultT) => {
    calc_PromiseT(resultT, 2)
      .then((result1T) => {
        calc_PromiseT(result1T, 0.5)
          .then((result2T) => {
            console.log(result2T);
          })
          .catch((error2T) => {
            console.log(error2T);
          });
      })
      .catch((error1T) => {
        console.log(error1T);
      });
  })
  .catch((errorT) => {
    console.log(errorT);
  });
