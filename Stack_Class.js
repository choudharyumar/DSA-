class Stack {
  item = [];
  currentSize;
  maxsize;
  constructor(size) {
    this.maxsize = size;
    this.currentSize = this.item.length;
  }
  push(val) {
    if (this.currentSize >= this.maxsize) {
      alert("exceed the limit");
    } else {
      this.item[this.currentSize] = val;
      this.currentSize++;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      alert("stack is already empty ");
    }
  }
  display() {
    console.log(st1.item);
  }
}
st1 = new Stack(5);
st1.push(20);
st1.push(24);
st1.pop();
st1.display();
