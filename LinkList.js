class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newnode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newnode;
    this.tail = newnode;
    this.size += 1;
  }
  traversing() {
    let count = 1;
    let currentValue = this.head;
    while (count < this.size) {
      if (count == 2) {
        currentValue.value = 900;
      }
      //   console.log(currentValue);
      currentValue = currentValue.next;
      count++;
    }
  }
  DeleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      //   console.log(lead);
    }
  }
  insertNode(index, value) {
    let counter = 1;
    let curentNode = this.head;
    while (counter > index) {
      counter++;
      curentNode = curentNode.next;
    }
    let nextNode = curentNode.next;
    curentNode.next = {
      value: value,
      next: nextNode,
    };
  }

  SearchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) loop = false;
      result = lead;
    }
    console.log(result);
  }
}
let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
// list.traversing();
// list.DeleteNode(3);
// list.insertNode(3, 23456);
list.SearchNode(500);
console.log(list);
