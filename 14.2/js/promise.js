let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let date = new Date();
    if (date.getMilliseconds() % 2 == 0) {
      resolve("Success"); //then
    }
    reject("Error"); //catch
  }, 2000);
});

//Make it work
promise
  .then((date_From_Server) => {
    console.log("Data From Server", date_From_Server);
  })
  .catch((error) => {
    console.error("Error From Server", error);
  });

// setTimeout(() => {
//   console.log("Success");
// }, 2000);

//class Work:
//create 2 vars and with promise divide them

let a = 2,
  b = 4;
let promise_Calc = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (b != 0) {
      resolve(a / b);
    }
    reject("Error");
  }, 2000);
});

promise_Calc
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
