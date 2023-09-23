

function matrixBasics() {
  let res = null;

  /* 
  # create and init a 2d array
  
  */

  const basics1 = () => {

    const matrix:any[][] = [];
    const rows:number = 4;
    const cols:number = 4;

    for (let row = 0; row < rows; row++) {
      matrix.push([]);
      for (let col = 0; col < cols; col++) {
        matrix[row][col] = {
          id: `${row}-${col}`,
          data: 0,
        };
      }
    }
    return matrix;
    //console.log(matrix);
  }

  ///const matrix:any[][] = basics1();

  //=======================================

  /* 
  # Transpose a matrix

  # swap all row values with col values.

  # solution:
  ==

  [j][i] = [i][j] 

  # just flip the i and j in a for loop
  i   j
  [0][0] => [0][0]
  [0][1] => [1][0] 
  [1][0] => [0][1]

  [2, 3]
  [5, 4]

  # rows =: becomes =: cols
  [2, 5]
  [3, 4]

  */

  const matrix1 = [
    [1, 3, 4],
    [5, 6, 7],
  ];

  const transposeMatrix = (matrix:any[][]) => {
    
    const rows:number = matrix.length;
    const cols:number = matrix[0].length;

    // transposed matrix
    // we need an empty matrix to the swap and not loose values
    //const transposed:any[][] = Array(rows).fill();
    const transposed:any[][] = [];

    // swap the length of cols with rows =: transposed
    for (let i = 0; i < cols; i++) {
      const arr:any[] = [];
      for (let j = 0; j < rows; j++) {
        arr.push(0);
      }

      transposed.push(arr);
    }

    for (let row = 0; row < rows; row++) {

      for (let col = 0; col < cols; col++) {
        transposed[col][row] = matrix[row][col]; 
      }
    }

    return transposed;
  }

  //res = transposeMatrix(matrix1);

  //=============================================

  /* 
  # search a 2d matrix:
  ==

  # search a sorted matrix

  # what is a sorted matrix?

  # the value of: [i][j] is always greater than [i][j - 1]
  [
    [1, 2, 3]
    [4, 6, 8]
  ]
  
  # target found =: return true;
  # not found -: return false;
  */
  
  /* 
  
  # O(n^2)

  # usually happens with we have nasted loops =: both loops go through the arr.length
  # usually: a 1d array.
  
  arr.length = 4 => 4^2 =: 4 * 4
  
  # O(n^2) also happens: in looping a 2d array of n * m , where n = m using: nested for loops.

  when loop iterations depend on two variables of the same size, such as n * m where n = m, the time complexity is commonly expressed as O(n^2) where n represents the size of the array.

  ===========================================

  # Big O of bellow function is: O(n * m)

  3 * 2 = 6 => can't say O(n^2) =: cause: 4^2 = 4 * 4, so: n has to be = m
  */

  // O(n * m)
  const searchMatrix = (matrix:any[][], target:any) => {
    const rows:number = matrix.length;
    const cols:number = matrix[0].length;

    for (let row =0; row < rows; row++) {

      for (let col = 0; col < cols; col++) {
        if (matrix[row][col] === target) return true;
      }
    }
    return false;
  }

  //res = searchMatrix(matrix1, 6);

  //=========================================

  // loop a matrix vertically: 
  function loopCols(matrix:any[][]) {
    const rows:number = matrix.length;
    const cols:number = matrix[0].length;

    for (let c = 0; c < cols; c++) {

      // col=0 => as we loop through the rows =: [0][0], [0][1], [0][2]
      for (let r = 0; r < rows; r++) {
        // row =: changes as col = 0
        console.log(r, c)
        console.log(matrix[r][c]);
      }
    }
  }

  //========================================

  const unsortedMatrix = [
    [4, 2, 6],
    [1, 34, 3]
  ];
    
  const binarySearchMatrix = (matrix:any[][], target:any) => {
    const rows:number = matrix.length;
    const cols:number = matrix[0].length;

    

    function sortMatrix(matrix:any[][]) {
      
    }

    // sort the 2d array
    /* const sorted = matrix.map((arr) => {
      return  arr.sort((a, b) => a - b);
    }); */

    // sort 
    //console.log(sorted)
  }

  binarySearchMatrix(unsortedMatrix, 6);

  console.log(res);
}

const matrices = {
  main: () => {
    matrixBasics();
  }
}

export default matrices;

/* 
https://www.csinfo360.com/p/matrix-or-2d-array-programming-practice.html

#easy:
  ==

  # Find the sum of all elements in a 2D array.
  # Find the maximum value in each row of a 2D array.
  # Transpose a square matrix (swap rows with columns).
  # Calculate the average value of each column in a 2D array.
  # Rotate a matrix 90 degrees clockwise.
  
  Normal: 
  ==

  6. Given a matrix representing a maze, find the shortest path from start to finish. 
  7. Calculate the determinant of a square matrix. 
  8. Check if two matrices are equal. 
  9. Given a matrix, find the spiral order traversal of its elements. 
  10. Given an image represented by a matrix, rotate it 90 degrees clockwise.

  Hard: 
  
  11. Find the maximum submatrix sum within a given matrix. 
  12. Given a matrix representing a board, find all valid words that can be formed using adjacent letters. 
  13. Given a matrix of 0s and 1s, find the largest square of 1s. 
  14. Rotate an image represented by a matrix without using extra space. 
  15. Implement matrix multiplication without using built-in functions.

  Very Hard: 
  
  16. Find the longest increasing path in a matrix. 
  17. Given a matrix with heights, calculate the amount of water it can trap after rain. 
  18. Given a matrix of integers, find the minimum path sum from the top-left to the bottom-right corner. 
  19. Rotate a matrix by 180 degrees (upside down and mirrored). 
  20. Implement a sparse matrix and perform matrix addition and multiplication.
*/