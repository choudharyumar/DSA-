let arr = [1, 5, 2, 6, 3, 7];
function SelectionSort(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] > data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}
SelectionSort(arr);
console.log(arr);
