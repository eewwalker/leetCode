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
