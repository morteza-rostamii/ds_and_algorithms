
function foo() {
  let res = null;
  /* 
  
  # problem: palindrome number:

  # an integer is a palindrome when it reads the same forward and backward.
  
  # a word or phrase that is the same: forward or backward

  ex: madam

  // input: x = 121 =>> output = true
  // input: x = 10 =>> output = false 

  // algorithm:
  == 

  word = cat

  const reversed = ''
    # values: 
      '' => c => ac => tac

  loop: i: 0 to cat.length
    reversed = str[i] + reversed;

  */

  // O(n)
  const isPalindrome = (str: string | number): boolean => {
    // number =: to =: string
    let phrase = str.toString();
    phrase = phrase.toLowerCase().trim();
    phrase = phrase.replaceAll(' ', '');

    // if: one char or digit =: return true
    if (phrase.length === 0) false;
    if (phrase.length === 1) true;

    let reversed = '';

    for (let i = 0; i < phrase.length; i++) {
      reversed = phrase[i] + reversed; 
    }

    return phrase === reversed;
  }

  res = isPalindrome('madam');
  res = isPalindrome('Never odd or even');
  res = isPalindrome(121);
  res = isPalindrome(100); // false

  // ===========================

  /* 
  # fibonacci series:
  ==

  0, 1, 1, 2, 3, 5, 8, 13, 21, 34

  # prev + current = next

  # input: n_index in fibo sequence.
  # output: n fibo number

  # F(0) = F(n - 1) + F(n - 2), for n > 1

  # in: n = 3 =>> out: 2
  */

  // o(n)
  const calcFibo = (
    n: number
  ): number => {

    const fibos = [0, 1];
    let n_fibo = 0;
    
    // start with: 0 
    // 0 + 1 = 1
    // 1 + 1 = 2
    // 1 + 2 = 3
    // 0 + 1 = 1 =: 1 + 2 = 3 =>
    for (let i=0; i < n - 1; i++) {
      const next = fibos[i] + fibos[i + 1]
      fibos.push(next);
    }
    
    return fibos[n];
  }
  
  res = calcFibo(3);

  //============================

  // o(n) => not so great
  const calcFibo2 = (
    n: number,
  ): number => {
    if (n === 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let prev = 0;
    let current = 1;
    let result = 0;
    /* 
    prev: 0, cur: 1 __ res = prev + cur = 1

    prev: 1, cur: 1 =: res = 2
    prec: 1, cur: 2 =: res = 3
    prev: 2, cur: 3 => res = 5
    */


    for (let i = 0; i < n - 1; i++) {
      // skip: for: n:1 = 0, n:2 = 1
      if (i === 0) continue;

      result = prev + current;
      prev = current;
      current = result;

    }

    return result;
  }

  // 1: 0, 2: 1, 3: 1, 4: 2, 5: 3, 6: 5
  res = calcFibo2(6);

  //==============================

  // fibonacci =: using recurcion
  const nthFiboRecu = (n: number): number => {

    // base case
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else {
      return nthFiboRecu(n - 1) + nthFiboRecu(n - 2);
    }
  }

  // 1, 1, 2
  res = nthFiboRecu(3); //2
  res = nthFiboRecu(4); //3

  //===============================

  /* 
  # valid anagram:

  # 2 words or phrases have the exact letters, arrenged differently!

  angel = glean	
  arc = car	
  brag = grab
  bored = robed	
  cat = act	
  cider = cried

  a gentleman = elegant man
  the detectives = detect thieves

  ================
  # algorithm:
  ==

  word1 = word2
    # has the same letters
    # same number of occourence for each letter
  */

  // using: frequency count method:
  // O(n)
  const findAnagram = (
    word1: string,
    word2: string,
  ): boolean => {
    if (word1.length !== word1.length) return false;

    word1 = word1.toLowerCase().trim().replaceAll(' ', '');
    word2 = word2.toLowerCase().trim().replaceAll(' ', '');

    let is_anagram = true;

    const word1_chars: any = {};

    // keep all letters and their count inside and object
    // O(n)
    for (let i = 0; i < word1.length; i++) {
      // if: key exist
      if (word1_chars[word1[i]]) {
        word1_chars[word1[i]]++; 
      } 
      else {
        word1_chars[word1[i]] = 1;
      }
    }
    
    for (let j = 0; j < word2.length; j++) {
      // if: one char does not exist 
      const char = word1_chars[word2[j]];

      // if char does not exist in word1
      if (!char) {
        is_anagram = false;
        break;
      }

      // one instace was found
      word1_chars[word2[j]] -= 1; 
      
    }

    // every value has to be: zero
    for (let key in word1_chars) {
      if (word1_chars[key] !== 0) {
        is_anagram = false;
        break;
      }
    }

    return is_anagram; 
  }

  res = findAnagram('cat', 'act');
  res = findAnagram('moreteza', 'morteza');
  res = findAnagram('a gentleman', 'elegant man'); // true

  // using: sorting
  
  //O(n log n)
  const findAnagramSort = (
    str1: string, str2: string,
  ) => {
    if (str1.length !== str2.length) return false;

    str1 = str1.toLowerCase().trim().replaceAll(' ', '');
    str2 = str2.toLowerCase().trim().replaceAll(' ', '');

    // sort each string
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // cat and act =: act
    return str1 === str2;
  }

  res = findAnagramSort('cat', 'act');
  res = findAnagramSort('a gentleman', 'elegant man');
  res = findAnagramSort('sds', 'love'); //false

  // ==============================

  /* 
  # two sum:

  #given an array of integers and an integer target.
  return indecies of the two numbers such that they add up to the target!
   
  input: int[] nums, int x
  out: [0, 1] =: index of elements that add up to: traget  

  target: 9
  [2, 7, 11, 15]

  input: 
    target: 6
    [3, 2, 4]
  out: 
    [1, 2]

  # we have to add every index in the array to other indecies:
  ==

  */

  // O(n^2)
  const twoSum = (
    nums: number[],
    target: number,
  ) => {
    const results: any = {
      //[2_3]: 5
    };

    //[3, 2, 4]
    for (let i = 0; i < nums.length; i++) {
      // skip: j being what ever i is and before that. if: i=1 =: j !== 0 OR 1
      for (let j = i + 1; j < nums.length; j++) {
        results[`${nums[i]}_${nums[j]}`] = nums[i] + nums[j];
      }
    }

    let target_key: string = '';
    for (let [key, value] of Object.entries(results)) {
      if (value === target) target_key = key;
    }

    const indecies_str: string[] = target_key.split('_');
    const indecies: number[] = indecies_str.map(x => Number(x));

    return indecies;
  }

  res = twoSum([3, 2, 4], 6);

  // O(n^2)
  const twoSum2 = (
    nums: number[],
    target: number,
  ) => {
    const results: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      // skip: j being what ever i is and before that. if: i=1 =: j !== 0 OR 1
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          results.push(nums[i], nums[j]);
        }
      }
    }

    return results;
  }

  res = twoSum2([2, 7, 11, 15], 9);

  // better solution:

  /* 
  # differences between: object and new Map();

  Keys: Object keys must be strings or symbols, but Map keys can be any value including objects.

  Iteration order: Object properties are unordered, Maps preserve insertion order of elements.

  Size detection: You can easily get the size/length of a Map but must manually count properties for objects.

  Methods: Map has useful methods like .has(), .get(), .set(), .delete() that make it behave more like a collection. Objects only have .hasOwnProperty().

  Type checking: Map allows type checking of keys and values with get/has using ===. Object properties are boxed.

  Performance: Map lookups are generally faster than object lookups, especially for larger Maps/Objects.

  Weak mappings: WeakMaps allow keys to be garbage collected, unlike Objects which keep keys around.

  Initializing: Maps can be initialized with another iterable, objects must be built with properties.

  */

  // O(n)
  const twoSum3 = (
    nums: number[],
    target: number,
  ) => {

    const value_index = new Map(
      // "value": index
      // "2": 0
    );

    for (let i = 0; i < nums.length; i++) {
      // 9 - 2 = 7 and 7 + 2 = 9
      // target - nums[0] = complement
      const complement = target - nums[i];

      // if: complement exist inside of the map: =: return: index of each addend. addened + addened = sum
      if (value_index.has(complement)) {
        // [index_of_first_addened, index_of_second_addened]
        // i: is the index of current addened
        return [value_index.get(complement), i]
      }

      // if: not found the complement: store: "value": index
      value_index.set(nums[i], i);
    }

    // no match found
    return [];
  }

  res = twoSum3([3, 2, 4], 6);

  // =================================

  /* 
  # best time to buy and sell stocks:
  ==

  # given and array of prices (stock).
    # prices of same stock on different days.
  # where prices[i] = 
    # price of a given stock
    # on the ith (nth) day
  
  # maximize your profit: 
    # by: 
      # choosing a single day to buy 1 stock
      # a different day in the feature
        # to sell that 1 stock
  
  # return: the maximum profit: 
    # if: can't achieve any profit =: return: 0

  # ===================

  # key things:
    # can only buy stock on one day.
    # can only sell on a different future day.
      # day[1] = min =: search after this for the day[i] = max 

  #====================

  # input: [7, 1, 5, 3, 6, 4], 
  # output: 5

  # this is all assending -: so: not possible to make any profit.
  ==
  # input: [7, 6, 4, 3, 1] 
  # output: 0

  stock_price[i] = price
    # i = number_of_day nth_day = price

  #====================================

  # edge cases:
  ==

    # what if: we have 2 days with min_price or max_price
      # this does not matter =: we only buy and sell on one day.
    # max_price <= min_price
      # after min_price =: we can't find a number bigger.

  */

  // O(n)
  const bestTimeToBuy = (
    stock_prices: number[]
  ): number => {
    let max_profit = 0;

    // assuming: price >= 1
    // map: value => index
    let min_price = new Map();
    min_price.set(stock_prices[0], 0);
    let max_price = new Map();
    //max_price.set(stock_prices[0], 0);

    //console.log([...min_price][0][0])
    //console.log(min_price);

    // find: days[i] = min_price
    for (let i = 0; i < stock_prices.length; i++) {
      // if ther is a new min
      const prev_min_price = [...min_price][0][0];
      if (stock_prices[i] < prev_min_price) {
        // clear and add the new min to map
        min_price.clear();
        min_price.set(stock_prices[i], i);
      }
    }

    const min_price_index = [...min_price][0][1];

    // if: min_price_index == end_of_array =: there is no future day!
    //console.log(min_price_index, stock_prices.length - 1)
    if (min_price_index === stock_prices.length - 1) {
      return 0;
    }

    // initial max_price is: min_price_index + 1
    // map: value => index
    max_price.set(stock_prices[min_price_index + 1], min_price_index + 1);

    // find: max future sell price: after: day_with_min_price
    // start from the day that had the min price:
    for (let j = min_price_index + 1; j < stock_prices.length; j++) {
      const prev_max_price = [...max_price][0][0];
      //console.log(stock_prices[j], prev_max_price)
      if (stock_prices[j] > prev_max_price) {
        max_price.clear();
        max_price.set(stock_prices[j], j);
      }
    } 

    const min_price_num: number = [...min_price][0][0];
    const max_price_num: number = [...max_price][0][0]; 

    // we could not find a day_max_price to sell: stock =: no profit!!
    if (max_price_num <= min_price_num) {
      return 0;
    } else {
      // calculate the =: max_profit
      //console.log(max_price_num, min_price_num);
      max_profit = max_price_num - min_price_num;
    }

    return max_profit;
  } 

  //res = bestTimeToBuy([7, 1, 5, 3, 6, 4]);
  res = bestTimeToBuy([7, 6, 4, 3, 1]);

  //==================
  /* 
  # best time to sell another method
  */

  const bestTimeToSell = (prices: number[]): number => {
    let maxProfit = 0;
    let currentMinPrice = prices[0];
    
    // what ever the currentMinPrice is after that is either a profit or not!
    for (let i = 0; i < prices.length; i++) {
      // find the min price
      if (prices[i] < currentMinPrice) currentMinPrice = prices[i];

      // calc the max profit
      const temp = prices[i] - currentMinPrice;

      // if: prices[currentInx] - currentMinPrice = bigger_profit
      if (temp > maxProfit) maxProfit = temp;
    }

    return maxProfit; 
  }

  res = bestTimeToBuy([7, 1, 5, 3, 6, 4]);
  //res = bestTimeToSell([7, 6, 4, 3, 1]);

  console.log(res);
} 

const chapter1 = {
  main: () => {
    foo();
  }
}

export default chapter1