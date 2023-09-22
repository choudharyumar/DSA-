let data = new Map([
  ["name", "umar"],
  [true, 134],
  [123, "contact"],
]);
data.set("color", "grn");
console.log(data.size);
console.log(data.has(123));
console.log(data.get(123));
// to remove data
// data.clear(  );
data.delete(123);
console.log(data);
// for (x of data) {
//   console.log(x);
//   //   console.log(x[1]);
// }
// data.forEach((val, key) => {
//   console.log(key);
// });
