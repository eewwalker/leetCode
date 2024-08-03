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


//TWO SUM SORTED ARRAY
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