let obj = {
  name: "umar",
  age: 23,
  contact: 12344,
  abc: function () {
    return this.age;
  },
};
for (x in obj) {
  console.log(obj[x]);
}

console.log(obj);
console.log(obj.abc());
obj.class = 5;
delete obj.age;
console.log(obj.name);

console.log(obj);
// for to show all keys
console.log(Object.keys(obj));
console.log(Object.values(obj));

// array of object
let arrObj = [
  { name: "umar", age: 23 },
  { name: "aaaa", age: 256 },

  { name: "bbbbbbb", age: 237 },
];
console.log(arrObj[2].age);
