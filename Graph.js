// let Graph = [
//   [0, 1, 1, 0],
//   [1, 0, 1, 1],
//   [1, 1, 0, 0],
//   [0, 1, 0, 0],
// ];
// console.log(Graph[2][1]);

// graph in class
class Graph {
  constructor() {
    this.data = {};
  }
  vertx(vartx) {
    if (!this.data[vartx]) {
      this.data[vartx] = [];
    }
  }
  addEdge(v1, v2) {
    if (!this.data[v1]) {
      this.data[v1];
    }

    if (!this.data[v2]) {
      this.data[v2];
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      return item != v2;
    });
    this.data[v2] = this.data[v2].filter((item) => {
      return item != v1;
    });
  }
  removeVertex(vertx) {
    if (!this.data[vertx]) {
      return;
    }
    for (let item of this.data[vertx]) {
      this.removeEdge(vertx, item);
    }
    delete this.data[vertx];
  }
}
let g = new Graph();
g.vertx("A");
g.vertx("B");
g.vertx("C");
g.vertx("D");
g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("B", "D");

// g.removeEdge("A", "C");
g.removeVertex("A");
console.log(g.data);
