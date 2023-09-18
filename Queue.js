let queue = [];
let maxsize = 5;
let currentSize = queue.length;

function enqueue() {
  let val = document.getElementById("newEl").value;
  if (currentSize >= maxsize) {
    alert("exceed the limit");
  } else {
    queue[currentSize] = val;
    currentSize++;
    document.getElementById("newEl").value = "";
  }
}
function dequeue() {
  if (!isEmpty()) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("array is already empty");
  }
}
function front() {
  if (!isEmpty()) {
    console.log(queue[0]);
  } else {
    alert("array is already empty");
  }
}
function rear() {
  if (!isEmpty()) {
    console.log(queue[currentSize - 1]);
  } else {
    alert("array is already empty");
  }
}
function isEmpty() {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
}
function display() {
  console.log(queue);
}
// enqueue(25);
// enqueue(253);
// enqueue(254);
// enqueue(255);
// enqueue(256);
// front();
// rear();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// dequeue();

// display();
