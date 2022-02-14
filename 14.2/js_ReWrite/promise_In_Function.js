const calc_PromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT != 0) {
      resolveT(numAT / numBT);
    }
    rejectT("Can't divide by 0");
  });
};

calc_PromiseT(2, 0)
  .then((resultT) => {
    console.log(resultT);
  })
  .catch((errorT) => {
    console.error(errorT);
  });
