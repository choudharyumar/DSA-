let arr1 = [1, 3, 5, 7, 9, 11];

let arr2 = [2, 4, 6];
let arr3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;
while (d1 < arr1.length && d2 < arr2.length) {
  if (arr1[d1] < arr2[d2]) {
    arr3[d3] = arr1[d1];
    d1++;
  } else {
    arr3[d3] = arr2[d2];
    d2++;
  }
  d3++;
}
while (d1 < arr1.length) {
  arr3[d3] = arr1[d1];
  d1++;
  d3++;
}
console.log(arr3);
