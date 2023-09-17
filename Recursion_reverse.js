let arr = [3, 5, 5, 6, 9, 99, 11];
let temp;
function Reverse(arr, start, end) {
  console.log(arr);

  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    Reverse(arr, start + 1, end - 1);
  }
}
Reverse(arr, 0, arr.length - 1);
//console.log(arr);
