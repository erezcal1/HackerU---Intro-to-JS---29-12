let promiseT = new Promise((resolveT, rejectT) => {
  setTimeout(() => {
    let dateT = new Date();
    if (dateT.getMilliseconds() % 2 == 0) {
      resolveT("Success"); //then
    }
    rejectT("Error"); //catch
  }, 2000);
});

//Make it work
promiseT
  .then((date_From_ServerT) => {
    console.log("Data From Server", date_From_ServerT);
  })
  .catch((errorT) => {
    console.error("Error From Server", errorT);
  });

// setTimeout(() => {
//   console.log("Success");
// }, 2000);

//class Work:
//create 2 vars and with promise divide them

let aT = 2,
  bT = 4;
let promise_CalcT = new Promise((resolveT, rejectT) => {
  setTimeout(() => {
    if (bT != 0) {
      resolveT(aT / bT);
    }
    rejectT("Error");
  }, 2000);
});

promise_CalcT
  .then((resultT) => {
    console.log(resultT);
  })
  .catch((errorT) => {
    console.error(errorT);
  });
