let arr = [1, 2, 3, 4, 5, 6, 7];
let new1 = 10;
let position = 3;
// console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {
  //   console.log(arr[i]);
  if (i >= position) {
    arr[i + 1] = arr[i];
    if (i == position) {
      arr[i] = new1;
    }
  }
}
console.log(arr);

// function insertEl() {
//   let data = [60, 30, 10, 67, 40];
//   let newEl = document.getElementById("newEl").value;
//   newEl = parseInt(newEl);
//   let position = document.getElementById("position").value;
//   console.log(data);

//   for (let i = data.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       data[i + 1] = data[i];
//       if (i == position) {
//         data[i] = newEl;
//       }
//     }
//   }
//   console.log(data);
// }

// by using built in function
// let item = [1, 2, 3, 4, 5, 6];
// item.splice(2, 0, 1000);
// console.log(item);
