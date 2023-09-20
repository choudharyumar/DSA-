let arr = [1, 2, 3, 4, 5, 6, 7];
let find = 6;
let pos = undefined;
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] == find) {
    pos = i;
    break;
  }
}
console.log(pos);
