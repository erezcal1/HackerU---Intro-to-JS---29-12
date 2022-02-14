const calc_PromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT != 0) {
      resolveT(numAT / numBT);
    }
    rejectT("Can't divide by 0");
  });
};

Promise.all([calc_PromiseT(1, 2), calc_PromiseT(10, 0), calc_PromiseT(10, 10)])
  .then((valvesT) => {
    console.log(valvesT);
  })
  .catch((errorT) => {
    console.error(errorT);
  });

Promise.allSettled([
  calc_PromiseT(1, 2),
  calc_PromiseT(10, 0),
  calc_PromiseT(10, 10),
])
  .then((valvesT) => {
    console.log(valvesT);
  })
  .catch((errorT) => {
    console.error(errorT);
  });
