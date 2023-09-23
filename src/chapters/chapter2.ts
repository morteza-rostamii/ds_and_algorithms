
function foo() {
  let res = null;

  /* 
  # O(n^2) space complexity:
  

  */
  
  // o(n^2)

  /* 
  if: n = 3 =: 3*3 = 9 elements
  
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
  ]
  */
  const createMatrix = (n: number) => {

    const matrix: any = [];

    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = i + j;
      }
    }
    
    return matrix;
  }

  res = createMatrix(3);

  //=======================================

  /* 
  # push and pop =: are more performant. 
  */
  const arrays = () => {
    const arr = [];
  
    // methods for add, and remove elements from the array:
  
    // push to the end of array
    arr.push(1);
    arr.push(2);
    // remove from begining of the array
    const el = arr.shift();
    //console.log(el) // 1
  
    arr.push(20);
    // push to the begining of the array
    arr.unshift(12);
  
    // remove from the end of the array
    const end = arr.pop();
    //console.log(end)//20

    return arr;
  }

  res = arrays();

  //=======================================



  //=======================================

  /* 
  # set:
  == 
  
  # values can't be duplicated
  # sets are dynamically sized
  # sets are not indexed and ordered
  # sets are iterables 



  */

  const mySet = new Set([1, 2, 3]);

  res = mySet;
  
  // can't add duplucate value.
  mySet.add(2);

  //=====================================

  /* 
  # Map
  ==

  # ordered collection of key-value:

  # difference with objects:
  ==

    # maps are ordered and objects are unordered
    # in map key can be of any type. but: in object key has to be string or symbol.
    # map does not have any: prototype and default properties
    # objects are not directly iterables , maps are.
    # object also gets functionalities (methods) and map does not

  */

  const mapDS = () => {
    const my_map = new Map([
      ['a', 1],
      ['b', 2]
    ]);
  
    // loop through a map
    for (const [key, val] of my_map) {
      console.log(`${key}, ${val}`);
    }
  }
  //mapDS();
  
  //==========================

  /* 
  # stack data structure:
  ==

  # last in first out
  # ex: browser history traking
  # undo: operations when typing
  # function execution stack

  # push:
    # to top of the stack
  # pop:
    # remove the top most element from the stack

  
  */
  
  const stackDS = () => {

    class Stack {
      private items: any[];

      constructor() {
        this.items = [];
      }

      push(element: any) {
        this.items.push(element);
      }

      pop() {
        return this.items.pop();
      }

      // what item is on top of the stack
      peek() {
        return this.items[this.items.length - 1];
      }

      isEmpty() {
        return this.items.length === 0;
      }
      
      size() {
        return this.items.length;
      }

      print() {
        console.log(this.items.toString());
      }
    }

    const stack = new Stack();

    stack.push(1);
    stack.push(4);
    stack.print();

    return stack;
  }

  //res = stackDS();

  //=========================

  /* 
  # Queue
  ==

  # a sequential collection of items.
  # first in , first out.

  # like: people in a line:
    # poeple enter from the (tail) and exit from the (head) of the line.
    
  # operations:
    # Enqueue: enter from the tail
    # Dequeue: exit from the head
  
  # ex:
    # printers
    # cpu task scheduling

  */

  const queueSD = () => {

    class Queue {
      private items: any[];

      constructor() {
        this.items = [];
      }

      // enter from the tail: arr[arr.lenth - 1]
      enqueue(element: any) {
        this.items.push(element);
      }

      // exit from the head arr[0]
      dequeue() {
        return this.items.shift();
      }

      isEmpty() {
        return this.items.length === 0;
      }

      peek() {
        if (!this.isEmpty()) {
          return this.items[0];
        }
        return null;
      }

      size() {
        return this.items.length;
      }

      print() {
        console.log(this.items.toString());
      }
    }

    //const queue = new Queue();

    // ======================

    // a better Queue: using objects: O(1)
    class Queue2 {
      private items: any;
      private rare;
      private front;


      /* 
      
      {
        # delete =: 0: el1, => front
        1: el2, => new_front
        2: => rare
      }
      
      */
      constructor() {
        this.items = {};
        this.rare = 0;
        this.front = 0;
      }

      enqueue(element: any) {
        this.items[this.rare] = element;
        this.rare++;
      }

      // exit from the head arr[0]
      dequeue() {
        const item = this.items[this.front];

        delete this.items[this.front];
        // next item is front now.
        this.front++;
        return item;
      }

      isEmpty() {
        // return this.rare - this.front === 0
        if (!Object.keys(this.items).length) {
          return true;
        }
        return false;
      }

      peek() {
        return this.items[this.front];
      }

      size() {
        // this.rare - this.front
        return Object.keys(this.items).length;
      }

      print() {
        console.log(this.items.toString());
      }

    }

    const queue = new Queue2();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(24);

    queue.dequeue();

    return queue; 
  }  

  res = queueSD();

  //==========================================

  /* 
  # linked list: 
  ==

  # value - next: address # => lastNode:# value - null #
  */

  const linkedList = () => {

    class Node {
      private value: any;
      private _next: any;

      constructor(value: any) {
        this.value = value;
        this.next = null;
      }

      set next(node: any) {
        this._next = node;
      }

      get next() {
        return this._next;
      }
    }

    class LinkedList {
      // head of the list is init null
      private head: any;
      // keep track of list size
      private size: number;

      constructor() {
        // just having the head node => access the rest of the list.
        this.head = null;
        this.size = 0;
      }

      isEmpty() {
        return this.size === 0;
      }

      getSize() {
        return this.size;
      }

      // add the first node
      prepend(value: any) {
        const node = new Node(value);

        // if: list is empty =: set the head
        if (this.isEmpty()) {
          this.head = node;
        }
        // list not empty
        else {
          // prepend to the begining

          // new_node.next = old_node_head
          node.next = this.head;
          // set current head = new_node
          this.head = node;
        }
        this.size++;
      }
      
      append(value: any) {

      }

      print() {
        if (this.isEmpty()) {
          console.log('list is empty');
        }
        else {
          // go over the whole linked list, starting from the first node.
          // O(n)
          let currentNode = this.head;

          while (currentNode !== null) {
            console.log(currentNode);
            currentNode = currentNode.next;
          }
        }
      }
 
    }

    const myList = new LinkedList();
    console.log(myList.getSize());

    // add node to the list:
    myList.prepend('ali');
    myList.prepend('sara');
    
    myList.print();

    return myList;
  }

  res = linkedList();

  console.log(res);
}

// linkedList:

function moreLinkedList() {
  let res = null;

  /* 
  
  # more one linked list:

  */

  const linkedListBasics = () => {
    let list = null;

    class Node {
      public value: any;
      public next: any;

      constructor(value: any) {
        this.value = value;
        this.next = null;
      }
    }

    class LinkedList {
      public head: any;
      
      constructor() {
        this.head = null;
      }

      isEmpty() {
        return !this.head;
      }

      append(value: any) {
        // create a node
        const node = new Node(value);

        // if list empty
        if (this.isEmpty()) {
          this.head = node;
        }
        // if: not empty
        else {
          //console.log(this.head)
          let cur = this.head;

          // loop to the last node:
          while (cur !== null) {

            if (cur.next === null) {
              // set the last_node.next = new_node
              cur.next = node;
              break;
            }
            cur = cur.next;
          }
        }
      }

      // traverse list elements: recursion
      /* 
      first: c(head)
      node=a: nothing<-c(node-a.next) 
                        =: print(node-a) 
      node=b: nothing<-base: node-b.next === null 
                        =: print(node-b)

      */
      printList(curNode: any) {

        // base-case
        if (curNode === null) return;

        console.log(curNode.value);
        //curNode = curNode.next;
        this.printList(curNode.next);
      }

      // traverse with loop
      printList2() {
        let cur = this.head;

        while (cur !== null) {
          console.log(cur.value);
          cur = cur.next;
        }
      }

      // return an array containing values of all nodes

      /* 
      a: 
      c(head, arr=[])
        arr.push('a'<~node-a.value)
        return<-c(head.next, arr)
          b:
          arr.push('b'<~head.value)
          return<-base
      
      */

      // O(n)
      printNodeValues(head: any, values: any[]=[]) {

        // accumulate and pass the array each frame down, and at baseCase return it up, with all the values.
        if (head === null) return values;

        values.push(head.value);

        return this.printNodeValues(head.next, values);
      }

      // return: sum of all the values in the linkedList
      // time: O(n)
      // space: O(n) =: because of the function calls on stack.
      sumList(head, sum=0) {

        if (head === null) return sum;

        sum += head.value;

        return this.sumList(head.next, sum);
      }

      /* 
      # linked list find:
      ==

      # return: true if: target value is within the linked list.
      */

      // time: O(n)
      // space: O(1)
      findValue(target: any) {

        const findTargetRec = (head: any) => {
          // baseCase
          // we are at the end of the list and no value was found!
          if (head === null) return false;
          if (head.value === target) return true;
  
          return findTargetRec(head.next);
        }

        const targetExist = findTargetRec(this.head);
        console.log(targetExist);
      }

      /* 
      # return: node value =: at a given index.
      */

      findValueByIndex(index: number) {
        let i = 0;
        const recCall = (head: any) => {
          // baseCase
          if (head === null) return -1; // index does not exist

          // if: at the index:
          if (index === i) return head.value;
          
          i++;

          return recCall(head.next);
        } 

        return recCall(this.head);
      }

      /* 
      # reverse linkedList

      1 -> 2 -> 3

      1 <- 2 <- 3

      next = null;

      current = 1
      after = 2

      next = after.next;
      after.next = current;
      current.next = null

      next.next = after;
      */

      // no recursion:
      reverseList() {
        // stack
        const items = [];
        let itemsSize = 0;

        // loop and push each node into the stack:
        let cur = this.head;
        while (cur !== null) {
          items.push(cur); // O(1)
          cur = cur.next;
        }

        itemsSize = items.length;

        // pop() -> arr[arr.length - 1]

        while (items.length) {

          // first: becomes tail
          if (items.length === 1) {
            items[0].next = null;
            break;
          }

          // set the last node as new_head
          if (items.length === itemsSize) {
            this.head = items[itemsSize - 1];
          }

          const current = items.pop();
          const before = items[items.length - 1];

          current.next = before;
        }

        console.log(items);
        // return new head
        return this.head;
      }

      // other method: reversed linkedList
      reversedList() {
        // first node has no prev
        let prev = null;
        let cur = this.head;
        //let nex = this.head.next;

        while (cur !== null) {
          
          // save the current.next
          const nex = cur.next;
          // set current to point to prev
          cur.next = prev;
          
          // move 3 pointers
          prev = cur;
          cur = nex;

          /* console.table({
            prev,
            cur,
            nex,
          }); */
        }

        // prev has the last node
        this.head = prev;
      }

      // reverse linkedList =: recursion
      // time: o(n)
      // space: O(n)
      reverseListRec() {
        
        // prev=null, head = current
        const back = ({
          head, 
          prev=null
        }: any) => {

          // at tail =: return last node all the way up.
          if (head === null) return prev;

          const next = head.next;

          head.next = prev;

          return back({
            // current = next
            head: next,
            // prev = head (current)
            prev: head,
          })
        }

        // new_head
        back(this.head);
      }

      /* 
      # zipper list problem:
      ==
      Merge a linked list into another linked list at alternate positions

      # grab: first: inx[0] -> second: inx[0]

      # if: no corresponding index: attach the rest of the longer list.

      a -> b -> c -> d
      e -> r

      # merge two lists in this way:
      a -> e -> b -> r -> c -> d
      
      ====================================

      a: 0 -> 1 -> 2

      b: a -> b -> c -> d -> g

      # a: 0 -> a -> 1 -> b -> 2 -> c -> d -> g

      a: 0 -> a -> 1 -> 2
      b: b -> c

      */

      zipperList(list2) {
        //console.log(list2.printList2());
        let cur1 = this.head;
        let cur2 = list2.head;
        let nex = null;

        while (cur1 !== null) {
          /* console.log('--');
          list2.printList2() */

          if (cur2 !== null) {
            nex = cur1.next;
            // clone the obj from list2 =: to not effect the list2
            cur1.next = {...cur2}; 
            // move the head in list2
            cur2 = cur2.next; 
            // elements inserted in middle -: points to next
            // 1 -> a -> 3 
            cur1.next.next = nex;
  
            // move to the next: jump 2 => to put the next list2 element.
            //   1 -> a -> 2 -> b
            // cur1       cur1
            cur1 = cur1.next.next; // jump

            // move the head in list2 =: for each element that we already merged to list1.
            // such that =: we end up with rest of elements, if: list2 is bigger.
            list2.head = list2.head.next;
          } else {
            break;
          }
        }

        console.log('++++');
        //this.printList2();
        //console.log(list2);
        //list2.printList2();

        // loop and append the rest of elements of list2 to the end of list1
        let current2 = list2.head;

        while (current2 !== null) {

          this.append(current2.value);

          current2 = current2.next;
        }

        this.printList2();
      }


      zipperList2(head1, head2) {

        // tail of the newList. starts with head1.
        let tail = head1;
        // tail already starts from head1 => so: grap from head1.next 
        let current1 = head1.next;
        let current2 = head2;
        // if: count is even =: get node from list2
        // else: count is odd =: get node from list1
        let count = 0;

        // stop once one list runs out of nodes to iterate
        while (current1 !== null && current2 !== null) {

          //even: list2
          if (count % 2 === 0) {
            // tail of newList.next = element from list2
            tail.next = current2;
            // move the head of list2
            current2 = current2.next;
          }
          // odd: list1
          else {
            tail.next = current1;
            current1 = current1.next;
          }

          // after adding an node from list1 or list2 => to newList
          // move tail to: newList.newElement
          tail = tail.next;

          // increment in each iteration
          count++;
        }

        // list.head has link to rest of nodes =: remainder inside of the list
        if (current1 !== null) tail.next = current1;
        if (current2 !== null) tail.next = current2;

        // head of the mergedList: head of list1
        return head1;
      }

      // using: recursion
      zipperList3(head1: any, head2: any) {

        // baseCases
        // same number of nodes
        if (head1 === null && head2 === null) return null;
        // head2 has more stuff
        if (head1 === null) return head2;
        // head1 has more stuff
        if (head2 === null) return head1;

        const next1 = head1.next;
        const next2 = head2.next;

        // 1 -> a
        head1.next = head2;
        head2.next = this.zipperList3(next1, next2);

        // we return: head1 -> head_of_new_list
        return head1;
      }

    }

    /* const list1 = new LinkedList();
    list1.append('a');
    list1.append('b');
    list1.append('c');
    list1.append('d');

    //list1.printList(list1.head);
    //list1.printList2();
    const reslut = list1.printNodeValues(list1.head, []);
    console.log(reslut); */

    const numList = new LinkedList();

    numList.append(2);
    numList.append(8);
    numList.append(3);
    /* numList.append(7); */

    //console.log(numList.sumList(numList.head))// 20

    // check if an element exist:
    //numList.findValue(8);
    //numList.findValue(10);
    //numList.findValue(7);

    //console.log(numList.findValueByIndex(2));

    //console.log(numList.reverseList());
    //console.log(numList.printNodeValues(numList.head));// [7, 3, 8, 2]

    //console.log(numList.reversedList());
    //numList.reversedList();
    //console.log(numList.printNodeValues(numList.head));

    // second list
    const list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    list2.append('d');
    list2.append('g');

    // merge numList with list2 => alternately
    //numList.zipperList(list2);

    //const newListHead = numList.zipperList2(numList.head, list2.head);
    //console.log(newListHead);

    // print all LinkedList values
    function printNodes(head) {
      let current = head;
      const values = [];

      while (current !== null) {
        values.push(current.value);

        current = current.next;
      }
      return values;
    }

    //console.log(printNodes(newListHead));

    const newHead = numList.zipperList3(numList.head, list2.head);
    console.log(printNodes(newHead));

  }

  linkedListBasics();

  //======================================

  // basic recursion:
  
  const basicRecursion = () => {

    const sumOfN = (n) => {

      // baseCase
      if (n === 0) return 0;

      /* 
      
      first_call: n=4: call(4)
      n=4: 10<-[4 + 6<-call(4 - 1=3)]
      n=3: 6<-[3 + 3<-call(3 - 1=2)]
      n=2: 3<-[2 + 1<-call(2 - 1=1)]
      n=1: 1<-[1 + 0<-call(1 - 1=0)]
      n=0: 0<-baseCase
      
      */
      return n + sumOfN(n - 1);
    }

    console.log(sumOfN(4));

  }

  //basicRecursion();

  // =================================

  // recursion 2 calls

  /* 
  // baseCase: returns: n
  n=2 :: 
  -1<-c(2 - 1=1)
    n=1 ::          n=1 ::   
    0<-c(1 - 1=0) + -1<-c(1 - 2)
      n=0 ::          n=-1 ::
        0<-base         -1<-base
  ====================================

  returns: 3
  n=2 ::                  n=2 ::
  2<-c(2 - 1=1)      +    1<-c(2 - 2=0)
                            n=0
                            1<-base

    n=1 ::                  n=1
    1<-c(1 - 1=0)    +      1<-c(1 - 2=-1)
      n=0 ::                  n=-1
      1<-base                 1<-base
  */

  const recursionTwo = (n: number) => {
    console.log('--', n);
    if (n < 1) return 1;

    return recursionTwo(n - 1) + recursionTwo(n - 2);
  }

  //res = recursionTwo(2);

  //console.log(res);
}

const chapter2 = {

  main: () => {
    //foo();
    moreLinkedList();
  }
};

export default chapter2;