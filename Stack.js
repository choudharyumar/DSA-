let arr = [];
let max = 5;
let curntsize = arr.length;
function push() {
  let val = document.getElementById("add").value;
  if (curntsize >= max) {
    alert("we can not add these values" + val);
  } else {
    arr[curntsize] = val;
    curntsize++;
    document.getElementById("add").value = "";
    console.log("element added");
  }
}

function pop() {
  if (curntsize > 0) {
    curntsize--;
    arr.length = curntsize;
  } else {
    alert("stack is empty");
  }
}

function display() {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log("the element", i, "array", arr[i]);
  }
}
//display();
// push(20);
// push(10);
// push(21);
// push(22);

// pop();

// console.log(curntsize);
// console.log(arr);
