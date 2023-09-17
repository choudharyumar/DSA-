let arr = [];
let currentSize = arr.length;
function push(val) {
  arr[currentSize] = val;
  currentSize++;
}
function pop() {
  let lastItem = arr[currentSize - 1];
  currentSize--;
  arr.length = currentSize;
  return lastItem;
}
function reverse(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  console.log(item);
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
    // pop();
  }
}
let str = "umar";
str = str.split("");
reverse(str);
console.log(str.join(""));

// push(20);
// push(25);
// push(55);
// pop();
// console.log(arr);
