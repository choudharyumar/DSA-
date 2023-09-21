let arr = [1, 2, 3, 4, 5, 6];
let find = 6;
let start = 0;
let end = arr.length - 1;
let position = undefined;
function RecursiveBinary(item, strt, nd) {
  let mid = Math.floor((strt + nd) / 2);
  if (item[mid] === find) {
    position = mid;
    return true;
  } else if (item[mid] < find) {
    RecursiveBinary(item, mid + 1, nd);
  } else {
    RecursiveBinary(item, strt, mid - 1);
  }
}
RecursiveBinary(arr, start, end);
console.log(position);
