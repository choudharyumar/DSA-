let arr = [1, 2, 5, 8, 9, 45, 50, 40];
for (let i = 0; i < arr.length; i++) {
  document.write(`array ${i} is ${arr[i]} <br>`);
}

let x = 3;
document.write(arr[x]);

function getelement() {
  let el = document.getElementById("element").value;
  if (el < arr.length && typeof parseFloat === "number" && el >= 0) {
    alert(arr[el]);
  } else {
    alert("please enter the right input");
  }
}
