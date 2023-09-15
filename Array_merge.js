let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [11, 12, 13, 14, 15, 156];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (let i = 0; i < arr1.length - 1; i++) {
  arr3[arr1.length + i] = arr2[i];
}
console.log(arr3);

// to reverse an array
let item = [1, 2, 3, 4, 5];
item.reverse();
console.log(item);

// shortcut to merge arrays
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let arr5 = [11, 12, 13, 14, 15, 156];
let arr6 = [...arr4, ...arr5];
console.log(arr6);
