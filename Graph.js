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
}
let g = new Graph();
g.vertx("A");
g.vertx("B");
g.vertx("C");
g.vertx("D");
g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("B", "C");

console.log(g.data);
