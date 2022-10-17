const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

/* class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
} */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addNode(node.left, data);
      }else {
        node.right = addNode(node.right, data);
      }

      return node;
    }

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    function hasNode(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(data < node.data) {
        return hasNode(node.left, data);
      }else {
        return hasNode(node.right, data);
      }
    }

    return hasNode(this.rootNode, data);
  }

  find(data) {
    function findNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if(data > node.data) {
        return findNode(node.right, data);
      }else {
        return findNode(node.left, data);
      }
    }

    return findNode(this.rootNode, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let maxNodeLeft = node.left;
        while(maxNodeLeft.right) {
          maxNodeLeft = maxNodeLeft.right;
        }
        node.data = maxNodeLeft.data;
        node.left = removeNode(node.left, maxNodeLeft.data);

        return node;
      }
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if(!this.rootNode) {
      return undefined;
    }

    let nodeMin = this.rootNode;
    while(nodeMin.left) {
      nodeMin = nodeMin.left;
    }

    return nodeMin.data;
  }

  max() {
    if(!this.rootNode) {
      return undefined;
    }

    let nodeMax = this.rootNode;
    while(nodeMax.right) {
      nodeMax = nodeMax.right;
    }

    return nodeMax.data;
  }
}

module.exports = {
  BinarySearchTree
};