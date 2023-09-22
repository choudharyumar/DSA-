let data1 = new Set(["hi", "umar", "umar"]);
let data2 = ["hi", "umar", "umar"];
data1.add("haji");
console.log(data1);
console.log(data2);
console.log(data1.has("hi"));
data1.add({ class: 5 });
console.log(data1.size);

for (x of data1) {
  console.log(x);
}
data1.forEach((val) => {
  console.log(val);
});
console.log(data1.values());
console.log(data1.entries());
