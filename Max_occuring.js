let str = "hello";

let objstr1 = {};
let maxKey = "";
for (let i = 0; i < str.length; i++) {
  let key = str[i];
  if (!objstr1[key]) {
    objstr1[key] = 0;
  }
  objstr1[key]++;
  if (maxKey == "" || objstr1[key] > objstr1[maxKey]) {
    maxKey = key;
  }
}
console.log(maxKey);
console.log(objstr1);
