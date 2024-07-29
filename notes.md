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