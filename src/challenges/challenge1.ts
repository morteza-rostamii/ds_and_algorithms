
function practice1() {
  let res = null;
  // fibonacci sequence

  /* 
  # what is fibonacci sequence
  starting by: 0, 1 or 1, 1

  # sum of each 2 previous numbers =: makes the next nuumber.
  
  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

  # challenge:
  # Given a number 'n' =: find the first 'n' elements of the fibonacci sequence ??

  */

  const fibonacci1 = ({
    n,
  }: {
    n: number
  }) => {

    const fibonacci = [1, 1];
    let nextFibo = 0;

    for (let i=0; i < n - 1; i++) {
      nextFibo = fibonacci[i] + fibonacci[i + 1];
      fibonacci.push(nextFibo);
    }

    return {
      nth: nextFibo,
      fibonacci: fibonacci,
    }
  }

  res = fibonacci1({
    n: 4
  });

  //====================================

  /* 
  # Given two strings find common letters between two string:

  */

  const commonSubStr = ({
    a, b
  }: {
    a: string, b: string
  }) => {
    
    a = a.toLowerCase();
    b = b.toLowerCase();
    
    const commons = {}

    //const aArr = 
    
  }

  res = commonSubStr({
    a: 'Naina',
    b: 'Reene'
  });

  //=================================

  /* 
  # 
  */

  console.log(res)
}

const challenge1 = {
  main: () => {
    practice1();
  }
}

export default challenge1