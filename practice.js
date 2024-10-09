//TWO POINTER TECHNIQUE PROBLEMS


//2108. Find First Palindromic String in the Array

function firstPalindromicString(words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return '';
}

function isPalindrome(word) {
  let left = 0;
  let right = word.length -1;
  while(left < right) {
    if (word[left] === word[right]) {
      left ++;
      right --;
    }else {
      return false;
    }
  }
  return true;
}


//167. Two Sum II - Input array is sorted

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length-1;

  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];

    }else if (sum > target) {
      right --;

    } else {
      left ++;
    }
  }
}

//TWO ITERABLES AS INPUT

//392. Is Subsequence
/**
 * P:
 *  input: two strings
 *    s = "abc", t = "ahbgdc"
 *  output: boolean
 *    true is s is subsequence of t
 *  both strings can be 0 chars long
 *
 * E:
 *                              i
 *  Input: s = "abc", t = "ahbgdc"
 *                j
    Output: true
                                i
    Input: s = "axc", t = "ahbgdc"
                 j
    Output: false

  D:
    going to use a two pointer approach

  A:
    iterate through t string with pointer
    set second pointer j = 0
    do the two chars === eachother?
        if not increment i
        if do increment both pointers
    after iteration is done on t string
      return does j === length of s -1
 */

    function isSubsequence(s, t) {
      let j =0;
      for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) {
          j++;
        }
      }
      return j === s.length;
    }



//REVERSE STRING
/*
P:
  have valid input and expected output
  complete this in constant 0(1) space
E:
  Input: s = ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
  input: an array of strings
  output: an array of strings
D:
  modify input string in place
A:
  two pointer approach
  left = 0
  right = str.length -1
  when the left pointer is greater than or equal right then stop iterating
    swap val left and right
    increment L
    decrement R
    return the array

            L
  ["o","l","l","e","h"]
            R
                  L
    ["h","a","n","n","a","H"]
              R
  */

  function reverseString(words) {
    let left = 0;
    let right = words.length-1;

    while(left < right) {
      [words[left], words[right]] = [words[right], words[left]];
      left++;
      right--;
    }
    return words;
  }

  //SQUARES OF A SORTED ARRAY
  /**
   * P:
   *  have a input array sorted in non-decreasing order
   *  output is an array sorted in non-decresing order
   * E:
   *  Input: nums = [-4,-1,0,3,10]
      Output:      [0,1,9,16,100]
   *
      D:
        input = array
        output = array
        two pointer approach
          left and right pointer
      A:
        [-7,-3,2,3,11]

          L
        [-4,-1,0,3,10] input array
                    R
        [0,1,9,16,100] output array
         fillPos = 0

        make an output array same size as the input array
        variable called fillPos = input array.length -1

        start a pointer left at start of nums
        and pointer right at end
        while fillPos is greater or equal to zero
        is absolute val of left num > abs val of right num
        the greater num**2 gets pushed into array at fillPos
          fillPos decrements
          greater val index is decremented or incremented

   */

  function squaresOfASortedArray(nums) {
    if(nums.length === 1) return [nums[0]**2];
    let left = 0;
    let right = nums.length-1;
    let fillPos = nums.length-1;
    const output =[];

    while (fillPos >=0) {
      if(Math.abs(nums[left]) >= Math.abs(nums[right])) {
        output[fillPos] = nums[left]**2;
        left++;
      }else{
        output[fillPos] = nums[right]**2;
        right--;
      }
      fillPos--;
    }
    return output;
  }

  function sortedSquares(nums) {
    const squaredNums = [];
    let fillPos = nums.length-1;
    let left = 0;
    let right = nums.length-1;

    while (left < right) {
        if (nums[left]**2 >= nums[right]**2){
            squaredNums[fillPos] = nums[left]**2;
            left++;
        }else {
            squaredNums[fillPos] = nums[right]**2;
            right--;
        }
        fillPos--;
    }
    squaredNums[fillPos] = nums[right]**2;
    return squaredNums;
};

  /**
  P:
    sum of three values
    input: array of integers, target
    output: boolean
    are there three nums in the array that equal to the target?
    if array < 3 return false
  E:
    [1, 2, 2, 6, 1], 5
    => true
    [1, 3, 5, 2, 8], 18
    => false
  D:
    multiple pointers low and high
    track the current element
           i  l
    [1, 1, 2, 2, 6], 10
                 h
  A:
    sort the array
    iterate through the array with i until second to last element
    create the low and high pointers from the curr element
    if the curr ele + low + high === target
      return true
    otherwise increment or decrement the low / high
    if not found target after iterating through array with i
      return false
  C:
   */

  function sumOfThreeValues(array, target) {
    array = array.sort((a, b) => a - b);

    for (let i = 0; i < array.length-2; i++) {
      let low = i + 1;
      let high = array.length -1;

      while (low < high) {
        let sum = array[i] + array[low] + array[high];

        if (sum === target) return true;
        else if (sum > target) {
          high--;
        } else {
          low++;
        }
      }
    }
    return false;

  }

/**
 * 3Sum
 *
 *P:
  * input: array of nums
  * output: array of arrays inner arrays are the three chars that add to 0
 *    the output can not contain duplicate triplets eg input: [0, 0, 0]
 *                                                    output : [0, 0, 0]  ONCE
 *
 *E:
 *  Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
 *
  D:
    keep track of curr element
    have a low and high pointer along with curr
    output arr

  A:
    first want to sort arr so I can use multiple pointers
      sort array  => [-4,-1,-1,0,1,2]
    iterate through the array with i

        l
    [-4,-1,-1,0,1,2]
      i
                  h
        l
    i
    [0, 0, 0]
            h

    then make a low and high pointer
    do the three ele at i, l, h === 0 ?
        push to the output array [ele, ele, ele]


 */



//FAST AND SLOW POINTERS

/**
 * P:
 * happy number? start with num => replace the num with sum of the square of its
 * digits => repeat until num === 1 (happy num)
 * or
 * num enters a cycle (not a happy num)
 * input: number
 * output: boolean happy num/unhappy num
 *
 * E:
 * input: 23
 * output: true
 *
 * D:
 *
 * A:
 *  input: n = 23
 *  does n === 1
 *    if not take 2^2 + 3^2 = 13
 *                1^2 + 3^2 = 10
 *                1^2 + 0^2 = 1
 */

function happyNumber(n) {
  let slow = n;
  let fast = sumOfSquaredVals(n);

  while (slow !== fast) {
    if (fast === 1) return true;
    slow = sumOfSquaredVals(slow);
    fast = sumOfSquaredVals(sumOfSquaredVals(fast));
  }
  return fast === 1;
}

function sumOfSquaredVals(n) {
  return [...String(n)].reduce((acc, curr)=> acc + Number(curr)**2, 0);
}

//141. Linked List Cycle
/**
 * P:
 * given the head of a linked list determine if there is a cycle
 * input: head node
 * output: boolean
 *
 * cycle meaning two different pointers are pointing to the same node
 * use rabbit/hare algo
 *
 * E:
 *  3-2-0-4
 *    ^
 *    |- -|
 *        v
 *  node 4 .next is node 2 so there is a cycle
 * output: false
 *
 * D:
 * slow pointer = starts at the head and moves one step
 * fast pointer = starts at the head and moves two steps
 * if they meet(are the same) theres a cycle
 *
 * A:
 * initialize to pointers slow and fast at the head node
 *
 * while fast and fast.next !== null
 * if slow === fast return true
 * move slow one slow = slow.next
 * move fast two fast = fast.next.next
 * return false
 */

// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
//T: O(n)
//S: O(1)


/**
 * P:
 * Find the middle node of a singly linked list
 * if the list is even will be the middle node
 * if the list is odd will be the second of the middle nodes
 * E:
 *              s
 *  1 → 3 → 5 → 7 → 9 → 11 → NULL => 7
 *                            f
 *        s
 *  1 - 3 - 5 - 9 - 11 - NULL => 5
 *                   f
 * D:
 *  slow and fast pointers
 *  slow = one step to next node
 *  fast = two steps to next next node
 * A:
 *  both pointers point to the head node
 *  while fast is not null and fast.next is not null
 *  move the pointers
 *    slow once
 *    fast twice
 *  if the list is even fast.next becomes null and return slow node
 *  if the list is odd fast becomes null and return slow node
 */
function getMiddleNode(head) {

}

//T: O(n)
//S: O(1)


//STACKS

/**
 * P:
 *  input: string
 *  output: string
 * remove adjacent duplicates
 * E:
 *  'aabccde' => 'bde'
 *  'aabbccdd' => ''
 *  'abcde' => 'abcde'
 *  'abcbbce' => 'abe'
 * D:
 *  use a stack to keep track of adjacent elements
 *  push and pop from stack to keep order
 * A:
 *  create a stack
 *  iterate through the string
 *  if the stack is not empty and the last ele in the stack is the curr ele
 *      pop off the stack => adjacent duplicate
 *  otherwise
 *      push to the stack
 *  return the joined stack to output a string
 *
 */
function removeAdjacentDuplicates(string) {
  let stack = [];
  for (let ele of string) {
    if (stack.length && stack[stack.length-1] === ele){
        stack.pop();
    }else {
      stack.push(ele);
    }
  }
  return stack.join('');
}

//T: O(n)
//S: O(n)




//matrix problems


/**
 * P: given a matrix
 * [0,0,0]
 * [1,2,2]
 * [1,0,2]
 * return the abs value of the left diagonal - the right diagonal
 *
 * E:
 * 0 + 2 + 2 = 4
 * 0 + 2 + 1 = 3
 * 4 - 3 = 1 and if a negative num return the absolute val
 *
 * D:
 * left and right variable to keep track of the sums
 * left is 00, 11, 22
 * right is 02, 11, 20
 *
 * length is length 3 - idx 0 - 1 2
 *           3 - 1 - 1 1
 *           3 - 2 - 1
 * A:
 * iterate through the nums
 *  use ii for left because it will remain the same idx
 *
 */

function countDiagonals(matrix) {
  let leftDiagonals = 0;
  let rightDiagonals = 0;

  for(let i = 0; i < matrix.length; i++) {
    leftDiagonals += matrix[i][i];
    rightDiagonals += matrix[i][matrix.length - i - 1]
  }
  return Math.abs(leftDiagonals - rightDiagonals);
}


//SLIDING WINDOW TECHNIQUE



/**
 * input: array of nums, a number k
 * output: number (max average)
 *  given an array of nums find a subarray
 *          whose length is equal to k(num)
 *          has maximum average
 * E:
 *
 *  [1,12,-5,-6,50,3], k = 4 ouput = 12.75000 [12, -5, -6, 50]
 *
 *  [5], k = 1  output = 5 [5]
 *
 * sliding window
 *   s = 0
 *  [4, 0, 4, 3, 3]  k = 5
 *   e = 0
 *
 * maxAvg = -INifinity
 * currSum = 0
 *
 *  start our s, e pointers at 0
 *  move the e until the condition of length === k is met
 *  take the average of the elements in that window
 *    save that in a var check against old avg.. which is larger?
 *  once the window becomes larger than k
 *    shrink with start pointer
 */
function findMaxAverage(nums, k) {
  let s = 0;
  let maxAvg = -Infinity;
  let currSum = 0;

    for (let e = 0; e < nums.length; e++) {
      currSum += nums[e];
      while (e - s + 1 > k) {
        currSum -= nums[s];
        s++;
      }

      let subArrayLen = e - s + 1;
      if (subArrayLen === k) {

        maxAvg = Math.max(maxAvg, currSum / subArrayLen);
      }
    }

    return maxAvg;
}


//LEETCODE
  //1418.Display Table Of Food Orders in a Restaurant

  /**
orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],
            ["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]

output = [
                //table then list all food items in alph order
            ["Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"],
                //table #, # of orders of the item per this table
                    //repeat for each table ORDER BY table # desc
            ["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]
        ]
]

 [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],
            ["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]

    const hash = {
        3:{Ceviche: 2, Fried Chicken: 1}, 10:{Beef Burrito: 1}, 5: {Water: 1, Ceviche: 1}
        }

    const displayTable = []
    iterate through the hash and put all item names in an array ["all in"]
        sort that array
            add table to the front
    sort the hash by key desc
    iterate through the hash
        use the displayTable starting at idx 1 where a food item is
            and check the hash if the key exists
                if not then push a 0
                or push the val of the key
 */

function displayTable(orders){
  const hashMap = {};
  const displayTable = [];

  for (let [_, table, order] of orders) {
      if (!hashMap[table]) {
              hashMap[table] = {};
      }
      if(hashMap[table][order]){
          hashMap[table][order]++;

      }else {
          hashMap[table][order] = 1;
      }
  }
  const header = [];
  for (let order in hashMap){
      let keys = Object.keys(hashMap[order])
      header.push(...keys)
  }
    const removeDuplicatesArray = Array.from(new Set(header.sort()))
    displayTable.push(['Table', ...removeDuplicatesArray]);

  for (let table in hashMap) {
          let tableArr = [table];
          for(let i = 1; i < displayTable[0].length; i++) {
              if (Object.keys(hashMap[table]).includes(displayTable[0][i])) {
                  tableArr.push(String(hashMap[table][displayTable[0][i]]))
              }else {
                  tableArr.push("0");
              }
          }

      displayTable.push(tableArr);
  }


  return displayTable;
};