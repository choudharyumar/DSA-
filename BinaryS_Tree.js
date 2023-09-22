class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BTree {
  constructor() {
    this.root = null;
  }
  EmptyTree() {
    return this.root === null;
  }
  MakeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.InsertNode(this.root, newNode);
    }
  }
  InsertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.InsertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.InsertNode(root.right, newNode);
      }
    }
  }
  SearchT(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.SearchT(root.left, val);
    } else {
      return this.SearchT(root.right, val);
    }
  }

  PreOrder(root) {
    if (root) {
      console.log(root);
      this.PreOrder(root.left);
      this.PreOrder(root.right);
    }
  }
  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      console.log(root);

      this.InOrder(root.right);
    }
  }
  PostOrder(root) {
    if (root) {
      this.PostOrder(root.left);

      this.PostOrder(root.right);
      console.log(root);
    }
  }
}

let tree = new BTree();
tree.MakeTree(20);
tree.MakeTree(10);
tree.MakeTree(5);
tree.MakeTree(11);
tree.MakeTree(30);
tree.MakeTree(40);
tree.MakeTree(23);

// tree.SearchT(tree.root, 44);

// console.log(tree);
console.log(tree.SearchT(tree.root, 44));
// tree.PreOrder(tree.root);
// tree.InOrder(tree.root);
tree.PostOrder(tree.root);
