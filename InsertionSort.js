let arr = [11, 12, 13, 5, 6];
function InsertionSort(data) {
  let i, current, j;
  for (i = 1; i <= data.length - 1; i++) {
    current = data[i];
    j = i - 1;
    while (j >= 0 && data[j] > current) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = current;
  }
}
InsertionSort(arr);
console.log(arr);
