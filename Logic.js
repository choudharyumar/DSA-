let arr = [12, 13, 14, 15, 17, 21, 24, 28];
let even = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  }
}
console.log(even);
for (let i = 0; i < even.length; i++) {
  even[i] = even[i] * 2;
}
let count = 0;
for (let i = 0; i < even.length; i++) {
  count++;
}
console.log(count);
console.log(even);
