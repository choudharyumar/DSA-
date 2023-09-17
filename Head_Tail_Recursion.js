// function value() {
//   let data = 10;
//   console.log(data);
// }
// function Apple() {
//   value();
// }
// function fruit() {
//   Apple();
// }

// function ab() {
//   fruit();
// }
// ab();

function test(x) {
  //   console.log(x);

  if (x > 0) {
    test(x - 1);
  }
  console.log(x);
}
let data = 5;
test(data);
