let arr = [];
let max = 5;
let curntsize = arr.length;
function push(val) {
  if (curntsize >= max) {
    alert("we can not add these values" + val);
  }
  arr[curntsize] = val;
  curntsize++;
}

function pop() {
  if (curntsize > 0) {
    curntsize--;
    arr.length = curntsize;
  } else {
    alert("stack is empty");
  }
}
push(20);
push(20);
push(20);
push(20);
push(20);
pop();
pop();
pop();
pop();
pop();
pop();

console.log(curntsize);
console.log(arr);
