// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// let position = 3;

function RemoveEl() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr);
  let position = document.getElementById("position").value;
  position = parseInt(position);
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
}

let item = [3, 4, 5, 6, 7];
delete item[2];
console.log(item);
let item2 = [3, 4, 5, 6, 7];
item2.splice(2, 1);
console.log(item2);
