# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Time Complexity

Looking at the partition function and the main function which uses a stack instead of recursion, the worst-case runtime would be O(n^2). Since the comparison is O(n) and there are two partitions for each step (each subarray) which is O(n) too, O(n*n) = O(n^2).

I looked at [This](https://www.hackerrank.com/challenges/quicksort3/problem) to understand the concept better and took example of using the last element as the pivot.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." This was my submission from last semester.
