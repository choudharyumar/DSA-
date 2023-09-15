// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// let item = 5;
// let index = undefined;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === item) {
//     index = i;
//   }
// }
// console.log(arr.indexOf(item));

function Searchel() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let item = document.getElementById("search").value;
  console.log(arr);
  let index = undefined;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === parseInt(item)) {
      index = i;
    }
  }
  console.log(index);
}

//to find  smae element on different positions

// let data = [10, 20, 67, 40, 50, 60, 67, 70, 80];
// let element = 67;
// let index = undefined;
// for (i = 0; i < data.length; i++) {
//   if (data[i] === element) {
//     index = i;
//     console.log(`Element found at ${index}`);
//     continue;
//   }
// }
