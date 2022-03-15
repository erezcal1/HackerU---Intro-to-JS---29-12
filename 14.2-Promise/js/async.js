setTimeout(() => {
  console.log("1");
}, 0);

let i = 0;
setTimeout(() => {
  i += 5;
  console.log("Happened");
}, 3000);

console.log("i before setTimeOut = ", i);
