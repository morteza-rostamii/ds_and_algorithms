
function graphAlgo() {
  let res = null;

  /* 

  # depth first traversal:
  ==

  # start at a node (any_node)
  # pick any direction (edge) and keep going until hit a node that
  has no edge to any other node.
  # then come back and go to other direction
  
  a -> c
  |    |
  *    *
  b <- e
  |
  *
  d <- f

  # if: start at a =: impossible to visit f
  
  */
 
  // each vertex or node
  class Node {

    //private _id:string;
    private _data:any;
    private _neighbors:Node[];

    constructor(data:any,) {
      //this._id = id;
      this._data = data;
      // edges
      this._neighbors = [];
    }

    get data() {return this._data};
    get neighbors() {return this._neighbors};
    //get id() {return this._id};

    addNeighbor(node:Node) {
      this._neighbors.push(node);
    }

    removeNeighbor(node:Node) {
      // neighbor !== node =: compares object reference in memory
      this._neighbors = this._neighbors.filter((neighbor) => neighbor !== node);
    }
  } 

  // graph
  class Graph {
    private _nodes:Map<any, Node>;

    constructor() {
      this._nodes = new Map();  
    }

    get nodes() {return this._nodes};

    // get a node by key_or_value
    getNode(data:any) {
      return this._nodes.get(data);
    }

    addNode(data:any, ) {
      const newNode = new Node(data,);
      this._nodes.set(data, newNode);
    }

    // inside: nodes_map =: key is: data: [node1, node2]
    removeNode(data:any) {
      const nodeToDel = this._nodes.get(data);

      // check if node exist
      if (!nodeToDel) throw new Error('node not found!');

      // remove node from the value
      // data is: key
      this._nodes.delete(nodeToDel.data);

      // also remove this node from list of neighbors
      this._nodes.forEach((node:Node) => {
        node.removeNeighbor(nodeToDel);
      });
    }

    addEdge(data1:any, data2:any) {
      const node1:Node | undefined = this._nodes.get(data1);
      const node2:Node | undefined = this._nodes.get(data2);

      // check both exist
      if (!node1 || !node2) throw new Error('node not found!');

      node1.addNeighbor(node2);
    }

    // incase: node1->node2 and node2->node1 =: point to each other.
    // we get remove reference from both nodes
    removeEdge(data1:any, data2:any) {
      const node1:Node | undefined = this._nodes.get(data1);
      const node2:Node | undefined = this._nodes.get(data2);

      if (!node1 || !node2) throw new Error('node not found!');

      node1.removeNeighbor(node2);
    }
  }

  // make a graph and add nodes and edges
  const myGraph = new Graph();

  myGraph.addNode('a');
  myGraph.addNode('b');
  myGraph.addNode('c');
  myGraph.addNode('d');
  myGraph.addNode('e');
  myGraph.addNode('f');

  myGraph.addEdge('a', 'b');
  myGraph.addEdge('a', 'c');
  myGraph.addEdge('b', 'd');
  myGraph.addEdge('c', 'e');
  myGraph.addEdge('d', 'f');

  //console.log(myGraph);

  // iterative solution:
  const depthFirstGraphTraverse = (graph:Graph, data:any) => {
    
    let current:Node | undefined = graph.getNode(data);

    if (!current) return;

    const values:any[] = [];
    const stack:Node[] = [ current ];

    while (stack.length > 0) {
      current = stack.shift();

      //console.log(current.data)
      values.push(current.data);

      while (current?.neighbors.length) {
        stack.push(current.neighbors.shift());
      }
    }
    
    return values;
  }

  //res = depthFirstGraphTraverse(myGraph, 'a');

  // depth-first recursion:
  const depthFirstGraphRec = (graph:Graph, start:any) => {

    console.log(start);
    //console.log(graph.getNode(start))
    const current = graph.getNode(start);

    if (!current) return;

    // baseCase: is when this loop stops =: no runing the recursive call.
    for (let edge of current.neighbors) {
      depthFirstGraphRec(graph, edge.data);
    }
  }

  //depthFirstGraphRec(myGraph, 'a');

  //==============================

  /* 
  # breadth-first
  */

  const breadthFirstPrint = (graph:Graph, source:any) => {
    let current:Node | undefined = graph.getNode(source);
    if (!current) return;
    let queue:Node[] = [ current ];

    while (queue.length) {
      current = queue.shift();
      
      console.log(current.data);
      
      // loop through array of edges
      for (let edge of current.neighbors) {
        queue.push(edge);
      }
    }
  }

  //breadthFirstPrint(myGraph, 'a');

  //=================================

  /* 
  
  f -> g -> h
  |   *
  |  /
  * / 
  i <- j
  |
  *
  k

  # use depth-first or breath-first search =: to determine if it's possible to react the
  target =: considering the starting node.
  
  */

  //const 

  console.log(res);
}

const graphs = {

  main: () => {
    graphAlgo();
  }
};

export default graphs;

/* 

# graph algorithms:
==

graph = nodes + edges

# node: circle(data)
# edge: link between two nodes
  # also: called vertex

# directed graph 
# undirected graph
  # no arrow with direction

# neighbor node:
  # any node that is accessible through and edge with a certain direction.

# depth first traversal:
==
  # first got deep in 1 direction untill there is no edge.

  # uses: stack

# bredth first traversal:
==
  # explore the neighbors of a node first. 

  # uses: queue

# we use adjacency-list =: to represent graph:

{
  a: [b, c],
  b: [d],
  c: [e],
  d: [],
}


*/