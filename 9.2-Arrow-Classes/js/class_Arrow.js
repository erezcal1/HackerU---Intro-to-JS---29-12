//What not to do
class A {
  f1 = () => {
    console.log(this);
  }
}
window.addEventListener("load", () => {
  let a = new A;
  a.f1();
})