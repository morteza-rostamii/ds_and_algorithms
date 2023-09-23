//import { faker } from '@faker-js/faker';

function basics() {
  let res = null;

  class Node {
    public id;
    public val;
    public left;
    public right;

    constructor(val:any, id:string='') {
      this.id = id;
      this.val = val;
      // left and right child
      this.left = null;
      this.right = null;
    }
  }

  // creating tree
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');

  a.left = b;
  a.right = c;

  b.left = d;
  b.right = e;

  c.right = f;

  /* 
    a: 
      b:
        d
        e
      c:
        f
  */

  /* 
  # depth first values:
  ==

  # go as deep in on branch of the tree =: before going across.

  # using stack: to do depth first traversal.

  */

  //Pre-order traversal (root -> left -> right)

  const depthFirstTreeStackPreOrder = (root:any) => {

    // empty tree
    if (root == null) return;

    // stack to push nodes into
    // starts with root node
    const stack = [root];

    // stop the loop when the stack is empty: we visited all the nodes
    while (stack.length) {
      // first: pop the root
      const item = stack.pop();

      // node was visited
      console.log(item.val);

      // if: right not null
      /* 
      # we push left and right into the stack
      # then we pop left first and go down all the subtree on left until exhausted.
      # then: we come back: right is still in the stack, so we pop it and go down that root.
      */
      if (item.right) stack.push(item.right);
      if (item.left) stack.push(item.left); // left is on top of right on the stack
    }
  }

  //depthFirstTreeStackPreOrder(a);
  //Pre-order traversal (root -> left -> right)

  //time: O(n)
    //# visits each node only once
  // space: O()
    // max items on the stack =: are n =: number of node
  const depthFirstTreeRecPreOrder = (root:any, values=[]) => {
    // we just visit this nodes -> so: return nothing.
    const node = root;
    if (node === null) return values;

    // visit the node:
    values.push(node.val);

    depthFirstTreeRecPreOrder(node.left, values);
    depthFirstTreeRecPreOrder(node.right, values);

    return values;
  }

  //const vals = depthFirstTreeRecPreOrder(a);
  //console.log(vals);

  // depth first recursion =: using a different syntax
  const depthFirstTreeRecPreOrder2 = (root:any) => {
    // baseCase
    if (root === null) return [];

    const leftValues: any[] = depthFirstTreeRecPreOrder2(root.left);
    const rightValues: any[] = depthFirstTreeRecPreOrder2(root.right);

    return [root.val, ...leftValues, ...rightValues];
  }

  //console.log(depthFirstTreeRecPreOrder2(a));

  //==========================================================

  /* 
  # breadth first traversal:
  ==
  Breadth-First Search (BFS)

       #      level-1
    #     #   level-2
  #   # #   # level-3

  # search all nodes in each level =: before moving to the next level.

  # one method:
  ==

  # use a queue:
    # start with pushing root from the tail of queue.
    # and exiting the node from head of the queue.

    # we visit: parent -> left and right =: before moving to the next level.
  */

  // time: O(n)
  // space: O(n)
  const breadthFirstTree = (root:any) => {
    // empty node
    if (root === null) return;

    const values = [];
    // start with root
    const queue: any[] = [root];

    while (queue.length > 0) {
      // oldest_node exits from head => first_in first_out
      const current = queue.shift();

      values.push(current.val);

      // push each node left and right node into: queue
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    return values;
  }

  // breadth-first: using recursion:
  // hard to do =: recursion uses stack => we need queue for breadth_first

  //console.log(breadthFirstTree(a));

  //===========================================================

  /* 
  # find a target value inside of the binary tree:
  ==

  
  */

  // depth-first traversal and return target value
  // time: O(n)
    // we have n input: and we visit each node once
  // space: O(n)
    // each node goes on the stack once.
  const findTargetInTree = (root:any, target:any) => {
    // last in first out
    const stack:Node[] = [root];
    // empty tree
    if (root === null) return;

    // loop as long as stack not empty
    while (stack.length > 0) {
      
      const current: Node | undefined = stack.pop();

      if (current?.val === target) return true;

      if (current?.left) stack.push(current.left);
      if (current?.right) stack.push(current.right);
    }

    return false;
  }

  //let res = findTargetInTree(a, 'b');
  //res = findTargetInTree(a, 'f');

  // recursive deapth-first
  /* 
  
  root: a
  
  */
  const findTargetRec: any = (root:any, target:any) => {
    // if: tree is empty or we reach the child with no children
    if (root === null) return false;
    // baseCase
    if (root.val === target) return true;
    
    // if: 1 time left or right produces =: true
    // we get true on top of the tree when we come back to the first frame.
    // true || false = true
    return findTargetRec(root.left, target) || findTargetRec(root.right, target);
  }

  //res = findTargetRec(a, 'f');

  //======================================

  /* 
  # treeSum:

  calc the total sum of the all values in the tree?
  
  */

  const root = new Node(3, 'root');
  const n1 = new Node(11, 'n1');
  const n2 = new Node(4, 'n2');
  const n3 = new Node(4, 'n3');
  const n4 = new Node(2, 'n4');
  const n5 = new Node(1, 'n5');

  root.left = n1;
  root.right = n2;

  n1.left = n3;
  n1.right = n4;

  n2.right = n5;

  /* 
    root(3)
      n1(11)
        n3(4)
        n4(2)
      n2(4)
        left: null
        n5(1)

  
  */

  // deapth search
  // sum of all nodes: recursion

  // time: O(n)
  // space: O(n)
  const treeSumRec = (root:any) => {

    // hit: null_node =: and come back to: [prev_frame] 0 + current.val
    if (root === null) return 0;
    
    let sum = root.val;
    console.log(root.val);

    console.log('--', sum)
    // return value of sum to each frame back and accumulate.
    sum += treeSumRec(root.left);
    sum += treeSumRec(root.right);

    return sum;
  }

  //==========================

  /* 
    sum=3    sum=3+11=14
  # frame1 => frame2 => frame2 => null
                                <-sum=25
  # accumulate sum to 25 and return the value of sum=25 up.
  */
  let sum = 0;
  const treeSumRec2 = (root:any) => {

    if (root === null) return sum;

    sum += root.val;

    treeSumRec2(root.left);
    treeSumRec2(root.right);

    return sum;
  }

  //res = treeSumRec(roo

  //res = treeSumRec2(root);

  //======================================

  /* 
  # tree-min-value

  # find the min value in the tree?
    return: smallest_number
  */

  //let min = root.val;
  const treeMinValue = (root:Node, min:number=root.val) => {

    if (root === null) return min;
   
    // in each frame: set new_min if there is.
    if (root.val < min) min = root.val;

    // return: min in each frame
    min = treeMinValue(root.left, min);
    min = treeMinValue(root.right, min);

    return min;
  }

  //res = treeMinValue(root);

  //==================================

  /* 
  
  baseCase-> Inf
    root.val < Inf =: min = root.val

  # from bottom to top of the tree, we return Inf from node_null
  # and we compare:
    # frame_left < frame_right = assign min

  base: returns: Infinity;

  c(root.left)
  c(root.right)
  */

  // time: O(n)
  // space: O(n)
  const treeMinValue2 = (root:Node) => {
    // baseCase: returns: Infinity
    if (root === null) return Infinity;

    let min;
    //const min = treeMinValue2(root.left) < treeMinValue2(root.right);

    // coming up (back) in our frames: starting with: base: Infinity
    // in each frame: what is the min value between: 
    // [ current.val, left.val, right.val ]
    min = Math.min(root.val, treeMinValue2(root.left), treeMinValue2(root.right));

    return min;
  }

  //res = treeMinValue2(root);

  //======================

  /* 
  # problem:

  # leaf_node: has no child.
  
  # start from the: root
  # go down to each leaf and sum the value of each node in that path?


  */

  const maxRootToLeafPathSum = (root:Node) => {

  }

  //==========================

  /* 
  Given a binary tree with distinct nodes(no two nodes have the same data values). The problem is to print the path from root to a given node x. If node x is not present then print “No Path”.

  */

  /* 
    root(3)
      n1(11)
        n3(4)
        n4(2)
      n2(4)
        left: null
        n5(1)
  */

  const pathFromRootToNode = (root:Node) => {

    // return: true if there is a path from root to: target_node
    // otherwise: return: false

    /* 
    so: if leaf_node does not return true:
    for line: if (root.val === targetNode.val) return true;

    stack.pop(); and return false
    so: although we visit each n nodes =: but: we pop the value of node from stack
    if: traget not found.
    */
    function hasPath(root:Node, stack:any[]=[], targetNode:Node) {
      //console.log(root);

      if (root === null) return false;

      // push current node data into arr
      stack.push(root.val);

      // current_node === target =: there is a path
      if (root.val === targetNode.val) return true;

      // check left and right sub-tree for target
      if (hasPath(root.left, stack, targetNode)) return true;
      if (hasPath(root.right, stack, targetNode)) return true;

      // can't find target in: current, current.left, current.right
      stack.pop();
      return false;
    }

    // print nodes from root to target
    function printPath(root:Node, target:any) {
      
      // stack will contain: all values: from root to: target leaf_node
      let stack:any[] = [];
      
      // if: path to leaf_node exist
      if (hasPath(root, stack, target)) {
        console.log(stack);
      } 
      else {
        console.log('no path.');
      }
    }

    /* 
    # get target leaf: for the path that has the max_sum greater than other paths.
    */
    
    // in case: node has -value
    let maxSum = -Infinity;
    let targetLeaf = null;

    const getTargetLeafMax = (root:Node, curSum:number=0) => {

      if (root === null) return;

      // sum up value of each node: from root => to: target_leaf
      curSum += root.val;

      /* 
      # if: node.left === null and node.right === null =: this is a leaf_node
        # then: check if the curSum on this path: is > then prev path: root to: leaf
      */
      if (root.left === null && root.right === null) {
        if (curSum > maxSum) {
          maxSum = curSum;
          // found target_lead with great path_sum
          targetLeaf = root;
        }
      }

      // path curSum into each frame to accumulate
      getTargetLeafMax(root.left, curSum);
      getTargetLeafMax(root.right, curSum);
    }

    //printPath(root, n4);
    //console.log(hasPath(root, [], n4));

    getTargetLeafMax(root);
    console.log(maxSum, targetLeaf); // 18, n3

    printPath(root, targetLeaf); // [3, 11, 4]
  }

  pathFromRootToNode(root);

  console.log(res)
}


const trees = {
  main: () => {
    basics();
  }
}

export default trees;

/* 

# tree:
  # node
  # edge

# node: 
  # holds value
# edge: 
  # conects nodes

# parent
  # child-a
  # child-b

# root 
  # node with no parent (starting node)

# leaf:
  # node with no child

# binary tree:
  # every node has at most 2 children 
  # might have less than 2, 1 child
  # has exactly 1 root
  # there is exactly 1 path between root and any node

# edge cases for binary tree:
==
  # tree with 1 node is: binary tree
  # tree with no node: (empty tree) =: is binary tree

# tree that node point to each other in circle => not binary_tree
  # root is not clear

# if: there is path that goes in circle =: not a binary_tree
  # cause: there are infinit paths from root to a node





*/