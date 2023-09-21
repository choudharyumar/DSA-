let arr = [1, 2, 3, 4, 5, 6];
let start = 0;
let end = arr.length - 1;
let find = 6;
let position = undefined;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  // console.log(arr[mid]);
  if (arr[mid] === find) {
    position = mid;
    break;
  } else if (arr[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(position);
