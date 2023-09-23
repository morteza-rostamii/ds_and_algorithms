

function dynamicProgramming() {
  let res = null;

  /* 

  # fibonacci:
  
  write a function fib(n) that takes in a number as an argument.
  function returns: the nth number of fibi sequence?
n: 1, 2, 3, 4, 5, 6
  [1, 1, 2, 3, 5, 8]

  (3 - 1) = 2 :: (2 - 1) = 1 :: (1 - 1) = (n=1) return: 1
              +              +
  (3 - 2) = 1 :: (1 - 1) = (n=1) return: 1

  # why fiboRec() breaks =: when input get large??
  ==

  Each recursive call adds a new stack frame to the call stack. The call stack has a finite size, so if the recursion depth gets too large it will exceed the maximum call stack size.

  For Fibonacci numbers, the number of recursive calls grows exponentially with n. So for a large enough n, it will trigger a stack overflow error.

  Some key points:

  Recursive functions use the call stack to keep track of function calls and return values.

  Each recursive call adds a new stack frame, consuming memory on the call stack.

  The call stack has a maximum size to guard against infinite recursion.

  Computing Fibonacci numbers recursively has exponential recursion depth proportional to n.

  So for a large enough n, it exceeds the maximum call stack and causes a stack overflow error.

  // big O of fiboRec() is: O(2^n) =: exponential

  so: creates a tree =: 2^n as: n=1 n=2 n=3 ...

  # start with 2 function calls =: each calls another 2 function calls.

  # 2 * 2 * 2 * 2 ...

                        #
                  #          #
              #      #    #     #
             # #    # #  # #   # #
  */

  // O(2^n)
  // space time is: O(n) 
  // cause: for each branch of function calls we have to come back and pop of: n function calls =: before going to the next branch.
  const fiboRec = (n: number) => {
    let counter = 0;
    let c1: number = 0;
    let c2: number = 0;
    let res: number = 0;
    
    counter++;
    
    if (n <= 2) return 1;

    c1 = fiboRec(n - 1);
    c2 = fiboRec(n - 2);
    res = c1 + c2;

    return res;
  }


  //console.log(fiboRec(20));
  //console.log(fiboRec(50)); // this breaks

  //======================================

  /* 
  
  # what is dynamic programming:
  ==

  - instead of calculating: fib(7) at once.
  - we see there is 2 =: of fib(5) in fib(7)
  - so: we break the poroblem and calc the fib(5) once.

  # memoization:
  ==

  calc and store the the repeated sub problem. that we can use it later.


  */

  // better fobinacci function

  // when we memoize =: we remove some of the branches =: and time becomes O(n)
  // time: O(n)
  // space: O(n)
  const fiboOuter = () => {
    
    // store all fibs in here, and if you need it get it from here again.
    const memo: {[key: string]: number} = {};

    const betterFibo = ({
      n,
      // first call pass an empty object
      //memo,
    }: {
      n: number,
      //memo: {[key: string]: number},
    }): number => {
      //console.log(memo)
      // if: we have fib(n) already cacl and stored inside of the memo_obj.
      if (n in memo) return memo[n];
      // baseCase
      if (n <= 2) return 1;
  
      // pass the memo object into each call -: has prev calculated values.
      memo[n] = betterFibo({n: n - 1}) + betterFibo({n: n - 2});
      return memo[n];
    }

    return betterFibo({n: 50});
  }

  res = fiboOuter();

  //===============================

  /* 
  
  # problem:
  ==

  # player is on a 2d grid
  # player begins on top-left corner
  # goal: travel to bottom-right corner.
  # can only move: down or right


  @ # # #
  # # # #
  # # # $ 

  # in how many ways can you travel to the goal on grid with dimensions m * n ?

  ==================================

  # research:
  ==

  # what is the problem:

    # on a grid of n * m =: ex: 2 * 2

    # player is on top-left  corner:

    [
      [p, 0],
      [0, $]
    ]

    # player can only move: down or right

    p #     p 
      #     # #

    ------------------------

    # 2 * 3

    [
      [p, 0, 0]
      [0, 0, $]
    ]

    # goal: bottom-right

  #-=====================
  # break down the problem:

  # how to count number of ways to travel from a to b
  by making a sequence of allowed moves [ ]

  #======================
  # sove a simple case of the problem:
  ==

    work on a 2 * 2 grid
  
  #======================
  #find a pattern
  ==

  # as dimensions of grid changes: is there a general formula that works 
  for each grid with different sizes

  Test your approach - Verify it works as expected on sample inputs of different sizes. Look for errors or edge cases

  Optimize if needed - Can you simplify the algorithm or calculations for large grids? Memorization may help avoid recomputing subproblems.

  #=======================
  # how to even print different elements of a grid: 2d array, with different patterns? 
  # example:
    right, right, down
    down, right, down

  #=======================

  # given this grid:

  [
    ['pizza', 'orange'],
    ['pasta', 'rice']
  ]

  how to move: pizze to: [1][1] position
  
  # we have to consider this rules:
    # pizza : can only move to a nighbouring index , at once
      # ex: pizze swap with orange then: pizza swap with rice

    # we can only move pizza: down or right

  # considering all these: 
    # how many possible ways we can move: 'pizza' to: [1][1] position?

  -----------------------------------------------------------
  # pseudo code:
  ==

  */

  //===================================


  function countPossibleMoves(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    // Create a 2D array to store the number of possible ways to reach each position
    const dp = Array.from(Array(rows), () => Array(cols).fill(0));
  
    // Initialize the starting position with 1 (only one way to reach the starting position)
    dp[0][0] = 1;
  
    // Calculate the number of possible ways for each position
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Skip the starting position
        if (row === 0 && col === 0) continue;
  
        // Check if the current position is reachable
        if (grid[row][col] !== 'pizza') {
          // Calculate the number of possible ways to reach the current position
          // [1][0] = [1 - 1=0][0] = 1  
          // [1][1] = [1 - 1=0][1] = 1
          if (row > 0) dp[row][col] += dp[row - 1][col]; // Add the number of ways from the position above
          // [0][1] = [0][1-1=0] = 1
          // [1][1] = [1][1-1=0] = 2 
          if (col > 0) dp[row][col] += dp[row][col - 1]; // Add the number of ways from the position to the left
        }
        console.log(dp[row][col])
      }
    }
  
    console.table(dp)
    // Return the number of possible ways to reach the [1][1] position
    return dp[1][1];
  }
  
  // Example usage
  const grid = [['pizza', 'orange'], ['pasta', 'rice']];
  const ways = countPossibleMoves(grid);
  console.log('Number of possible ways:', ways);


  //===================================


  const walkOnGrid = ({
    n, 
    m,
  }: {
    n: number,
    m: number,
  }): number => {
    let num_of_ways_walk_on_grid = 0;

    console.log(n, m)

    return num_of_ways_walk_on_grid;
  }

  /* res = walkOnGrid({
    n: 2, m: 2,
  }); */

  console.log(res);
}

const chapter3 = {

  main: () => {
    dynamicProgramming();
  }
};

export default chapter3;