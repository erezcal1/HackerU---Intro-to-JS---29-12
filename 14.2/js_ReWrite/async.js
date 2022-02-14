setTimeout(() => {
  console.log("1");
}, 0);

let iT = 0;
setTimeout(() => {
  iT += 5;
  console.log("Happened");
}, 3000);

console.log("i before setTimeOut = ", iT);
