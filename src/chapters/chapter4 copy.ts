
function foo() {
  let res = null;

  /* 
  # 
  

  */

  const arrMethods = () => {
    
    // fill()
    // change all elements of a array into a static value.
    // .from() converts and iterable into an array.
    const arr = Array.from(Array(10).keys()).fill(0);

    // findIndex
    // returns the index of the value
    const names:string[] = ['ali', 'sara'];
    const inx = names.findIndex((x) => x === 'sara');

    // flat an 2d array
    const matrix:any[][] = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    console.log(matrix.flat());//[1, 2, 3, 4, 5, 6]
  }

  //arrMethods();

  //===================================

  /* 
  # second largest number

  # given a array of size N, 
  # print second largest distinct element from an array.

  # input: [12 ,35, 1, 10, 34, 1] => output: 34
  # input: [10, 5, 10] =: output: 5

  # largest: 35 =: secondLargest = 34

  // we could also: sort the array and use set to avoid the repeated elements.
  // then: last 2 elements are: [ ... , secondLargest, largest]

  */

  // O(n)
  const findSecondLargest = (arr:number[]) => {
    
    if (!arr.length) return;

    let maxValue:number = arr[0];
    // max - current = the smaller it is 
    const secondLarge: {
      res:number,
      index:number,
    }= {
      res: Infinity,
      index: 0,
    };

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) maxValue = arr[i];
    }
    // second largest value
    for (let j = 0; j < arr.length; j++) {

      // skip the max value
      // also: max_value might be repeated
      if (arr[j] === maxValue) continue;

      const res:number = maxValue - arr[j];
      // maxValue - currentValue = some smaller value =: we found the second largest value.
      if (secondLarge.res > res) {
        secondLarge.res = res;
        secondLarge.index = j;
      }
    }

    console.log(secondLarge, secondLarge.index);
    return arr[secondLarge.index];
  }

  //findSecondLargest([10, 5, 10]);
  res = findSecondLargest([12, 35, 1, 10, 34, 1]);

  console.log(res);
}

const chapter4 = {

  main: () => {
    foo();
  }
};

export default chapter4;