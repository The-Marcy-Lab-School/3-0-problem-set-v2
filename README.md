# Unit 3 Problem Set 0 - Problem Solving
- [Unit 3 Problem Set 0 - Problem Solving](#unit-3-problem-set-0---problem-solving)
- [Question 1: isRealPalindrome](#question-1-isrealpalindrome)
- [Question 2: runningTotal](#question-2-runningtotal)
- [Question 3: swap](#question-3-swap)
- [Question 4: wordSizes](#question-4-wordsizes)
- [Question 5: union](#question-5-union)
- [Question 6: firstRecurring](#question-6-firstrecurring)
- [Question 7: showMultiplicativeAverage](#question-7-showmultiplicativeaverage)
- [Question 8: multiplyList](#question-8-multiplylist)
- [Question 9: sequence](#question-9-sequence)


# Question 1: isRealPalindrome
Write a function that returns `true` if the string passed as an argument is a palindrome, or `false` otherwise. your function should be case-insensitive, and should ignore all non-alphanumeric characters.

If you don't know what a palindrome is, run a quick Google check before starting!

```js
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
```

# Question 2: runningTotal
Write a function that takes an array of numbers and returns a new array where each element is the cumulative sum of all previous elements in the input array.

```js
runningTotal([1, 1, 1]);             // [1, 2, 3]
runningTotal([1, 2, 3]);             // [1, 3, 6]
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
```

# Question 3: swap
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word. You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

```js
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
```

# Question 4: wordSizes
Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes. Words consist of any sequence of non-space characters. In the first example below, there is one sequence of length `2`, one sequence of length `4`, and one sequence of length `6`.

Pay attention to the empty string!

```javascript
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('');                                            // {}
```

# Question 5: union
Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays. Check the tests to see how edge cases should be handled.

```javascript
union([1, 3, 5], [3, 6, 9]);     // [1, 3, 5, 6, 9]
union([2, 2, 2, 2], [10, 5, 2]); // [2, 10, 5]
```

# Question 6: firstRecurring
Find the [first recurring character](https://www.youtube.com/watch?v=GJdiM-muYqc) in a string. If a string does not have a recurring character, return an empty string. All characters will be lowercase.

That video linked above is *extremely* valuable, **you must watch it.** It teaches a crucial technique that is used in a ton of problems.

```javascript
firstRecurring('reuben');           // 'e'
firstRecurring('anna');             // 'n'
// 'a' may have a repeated character, but 'n's repeat comes first!
firstRecurring('restaurant');       // 'r'
firstRecurring('paul');             // ''
```

# Question 7: showMultiplicativeAverage
Write a _multiplicative average_ function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

There's a really useful method in JS that keeps numbers to a fixed length, try to find it!

```js
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
```

# Question 8: multiplyList
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arrays will always be the same length.

```js
multiplyList([1, 2, 3, 4], [1, 1, 1, 1]); // [1, 2, 3, 4]
multiplyList([1, 2, 3], [2, 2, 2]); // [2, 4, 6]
multiplyList([3, 5, 7], [9, 10, 11]);  // [27, 50, 77]
multiplyList([5, 10, 15, 20], [1, 2, 3, 4]);  // [5, 20, 45, 80]
```

# Question 9: sequence
Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order. You may assume that the argument will always be a positive integer.

```js
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
```