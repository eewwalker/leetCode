
Problem: Understand the problem (requirements) expected input/output
    should output be something else? Its an array unless the input is invalid then its false?
    details of problem
    do indices need to be in order [0, 1] or can i return [1, 0] ?
    what about empty [] or '' what to return?

Example/TestCases: Sometimes given or need to write own but understand expected inputs and outputs
    Happy path - expected input, expected output
    Not Happy Path - unless told always receive valid input and always an answer
    Then use test cases to test code

Data Structure:
    Tools needed to get input and give output
    Not committing to anything just notice what we need maybe an object with key:val pairs..

Algorithm:
    Walk through the problem not too detailed but with enough detail to understand how to walk through the problem IN ANY LANGUAGE
    Should be able to implement in any language you want
    Should have nothing else left to figure out/logically

Coding:
    Start coding
    If something is wrong and there's a mistake... go back to algo instead of continuing to code



### Big O =>
    used to describe computational complexity of an algo: how code performs as input grows
        /                           \
    time complexity             space complexity
amount of time to run          amount of space(memory) allocated relative to input size
relative to input size

0(1) CONSTANT
0(logN) LOGARITHMIC
0(n) LINEAR
0(N log N) LOG LINEAR
0(n^2) QUADRATIC
0(n^3) CUBIC


# Space complexity: as the input size grows, how much more memory does the algorithm use?

## HINTS
Most primitives (booleans, numbers, undefined, null) => constant space

Strings => O(n) space (where n is string length)

Reference types => generally O(n), where n is length of array (or keys in object)



# Time complexity: as the input size grows, how much longer does the algorithm take to complete?


## RULES:
    Constants do not matter
        ```
            0(5) => 0(1)
            0(10n^2) => 0(n^2)
        ```
    Smaller terms do not matter
        ```
            0(n^2 + 10n + 5) => 0(n^2)
        ```

## HINTS:
    Arithmetic operations are constant time 0(1)
        ```
            x + y / 10
        ```
    Variable assignments are constant
        ```
            const cat = 'Minxy';
        ```
    Accessing elements in an array(index) or object(key) are constant
        ```
            nums[1] => 0(1)
            obj[key] => 0(1)
        ```

Binary Search => logn
Best runtime for sorting => nlog2n

# RECURSION
function that calls itself

recursive function --- iterative function
Every function call "exists" until it returns.
Each function call also has its own local scope.

## NEEDS
    base case (condition at start of function that terminate the calls)
    recursive case

### ARRAYS AND STRINGS


# TWO POINTERS
    efficently traverse or manipulate sequential data structure..array, linked list,   string
        - find two data elements in an array that satisfy a certain condition
        - linear DS
        - process data elements at two different positions simultaneously
        - pointers move independent of eachother

    never have more than 0(n) iterations
    0(1) space because of left and right (for a simple is palindrome problem)






### LINKED LISTS/ARRAY/STRING (Linear DS)

# FAST AND SLOW POINTERS
    uses pointers to traverse a iterable data structure
    often used to find cycles, identify patterns, find specific elements
    start at same position- move at different speeds

## Example problems
    Find middle of element
    Detect cycle in iterable