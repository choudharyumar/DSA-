class Queue {
  constructor(size) {
    this.max = size;
    this.item = new Array(size);
    this.currentSize = 0;
    this.front = -1;
    this.rear = -1;
  }
  enque(val) {
    if (this.currentSize != this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.item[this.rear] = val;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.currentSize != 0) {
      this.item[this.front] = null;
      if (this.front == this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.front = -1;
      this.rear = -1;

      alert("the queue is empty");
    }
  }
}
let queue = new Queue(5);
queue.enque(10);
queue.enque(11);

queue.enque(12);
queue.enque(13);
queue.enque(14);

queue.dequeue();
queue.enque(100);
console.log(queue);
