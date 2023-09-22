function Anagram(str1, str2) {
  console.log(str1, str2);
  let objstr1 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (ch of str1) {
    objstr1[ch] = (objstr1[ch] || 0) + 1;
  }
  for (ch of str2) {
    if (!objstr1[ch]) {
      return false;
    }
    objstr1[ch]--;
  }
  return true;
}
console.log(Anagram("hello", "elloh"));
