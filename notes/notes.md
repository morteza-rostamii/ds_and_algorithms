<!-- 

# data structures:
  ==

# Big O's:
==

constant time: O(1)
logarithmic time: O(log(n))
linear time: O(n)
linearithmic time: O(n * log(n))
Quadratic time: O(n^2)
cubic time: O(n^3)
exponential time: O(b^n) b > 1
factorial time: O(n!)

=============================

# big O notation:
==

# space complexity:
==

input increase => memory increase

# as the input grows => by which algebra function =: memory use grows.

# primitives
==
boolean , number, undefined, null =: constant time

string, array, object =: dynamic

/* 
# data structures:

=============
# arrays: 
=============

# bit: 0 and 1
# 8 bits => 1 Byte
# 1 int = 4 bytes = 32 bites
# ((continues)) memory locations:
[----, ----, ----, ...]
[1, 2, 3]

# static arrays:
==
# fixed sized array.
# size of array will be determained in the begining of program and can't be changed.

# array is indexed =: start from 0
0, 1, 2, ...

# reading value from the array if: have the index: =: is: o(1) constant time.
  # console.log(arr[1])
  
# but finding a value inside of the array can't be constant:
  # linear search =: o(n)
  # binary search =: o(log n)

# writing to an array:
==

# add_to_end: o(1)
# add_to_start or between elements: o(n)

# write to a position: arr[3] =: o(1)
# delete a position: arr[1] =: o(1)

#===================================

# dynamic array:
==

# ===================================

# stacks:
==

# last in =: first out

# push and pop

#===================================



*/
=======================================================

# dynamic programming:
==

# memoization
# tabulation

# given this grid:

  [
    ['pizza', 'orange', 'love'],
    ['pasta', 'ball', 'park'],
    ['tank', 'meat', 'rice'],
  ]

  how to move: pizze to: [2][2] position
  
  # we have to consider this rules:
    # pizza : can only move to a nighbouring index , at once
      # ex: pizze swap with orange then love, then park and then rice

    # we can only move pizza: down or right

  # considering all these: 
    # how many possible ways we can move: 'pizza' to: [2][2] position?

use javascript!! don't use recursion!!

 -->