const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

// make 6 random letters and numbers for the tests
const getRandomString = () => Math.random().toString(36).slice(2, 8).toLocaleLowerCase();

describe(testSuiteName, () => {
  it('isRealPalindrome - checks for palindromes, ignores punctuation or capitalization', () => {
    expect(isRealPalindrome('hello')).toBe(false);
    expect(isRealPalindrome('madam')).toBe(true);
    expect(isRealPalindrome('Madam')).toBe(true);
    expect(isRealPalindrome("Madam, I'm Adam")).toBe(true);

    const randomString = getRandomString();
    expect(isRealPalindrome(randomString)).toBe(false);

    const randomPalindrome = randomString + randomString.split('').reverse().join('');
    expect(isRealPalindrome(randomPalindrome)).toBe(true);

    const randomPalindromeWithPunctuation = `?${randomPalindrome}!`;
    expect(isRealPalindrome(randomPalindromeWithPunctuation)).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('RunningTotal - increases the total with each value in the array', () => {
    expect(runningTotal([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    expect(runningTotal([14, 11, 7, 15, 20])).toEqual([14, 25, 32, 47, 67]);
    expect(runningTotal([3])).toEqual([3]);
    expect(runningTotal([])).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('swap - swaps the first and last letter of each word, no punctuation used', () => {
    expect(swap('Oh what a wonderful day it is')).toBe('hO thaw a londerfuw yad ti si');
    expect(swap('Abcde')).toBe('ebcdA');
    expect(swap('a')).toBe('a');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('wordSizes - returns an object of the length of each space separated set of characters', () => {
    expect(wordSizes("What's up doc?")).toEqual({ 2: 1, 4: 1, 6: 1 });
    expect(wordSizes('Four score and seven.')).toEqual({ 3: 1, 4: 1, 5: 1, 6: 1 });
    expect(wordSizes('I ate her lunch')).toEqual({ 1: 1, 3: 2, 5: 1 });
    expect(wordSizes('')).toEqual({});

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('union - creates a new array made up of unique elements from both arrays', () => {
    // Why are we sorting your results?
    // So that as long as keys aren't repeated, it will be correct!
    const result1 = union([1, 3, 5], [3, 5, 7]);
    expect(result1.length).toBe(4);
    result1.sort((a, b) => a - b);
    expect(result1).toEqual([1, 3, 5, 7]);

    const result2 = union([1, 5, 2, 3], [5, 1, 2, 3, 4]);
    expect(result2.length).toBe(5);
    result2.sort((a, b) => a - b);
    expect(result2).toEqual([1, 2, 3, 4, 5]);

    const result3 = union([1, 2, 3], [4, 5, 6]);
    expect(result3.length).toBe(6);
    result3.sort((a, b) => a - b);
    expect(result3).toEqual([1, 2, 3, 4, 5, 6]);

    const result4 = union([1], [1]);
    expect(result4).toEqual([1]);

    const result5 = union([], []);
    expect(result5).toEqual([]);

    const result6 = union([2, 2, 2], [2, 2, 2]);
    expect(result6).toEqual([2]);

    const result7 = union([1, 2, 3], []);
    expect(result7.length).toBe(3);
    result7.sort((a, b) => a - b);
    expect(result7).toEqual([1, 2, 3]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('firstRecurring - returns the first character that gets repeated', () => {
    expect(firstRecurring('reuben')).toBe('e');
    expect(firstRecurring('anna')).toBe('n');
    expect(firstRecurring('restaurant')).toBe('r');
    expect(firstRecurring('paul')).toBe('');

    const randomCharacter = getRandomString()[0];
    expect(firstRecurring(randomCharacter)).toBe('');

    const randomRepeater = `${randomCharacter}a${randomCharacter}`;
    expect(firstRecurring(randomRepeater)).toBe(randomCharacter);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('showMultiplicativeAverage - returns multiplicative average as a string to 3 decimal points', () => {
    expect(showMultiplicativeAverage([3, 5])).toBe('7.500');
    expect(showMultiplicativeAverage([2, 5, 7, 11, 13, 17])).toBe('28361.667');
    expect(showMultiplicativeAverage([1])).toBe('1.000');
    expect(showMultiplicativeAverage([2, 2, 2])).toBe('2.667');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('multiplyList - 2 arrays are multiplied to return a new array of their products', () => {
    expect(multiplyList([1, 2, 3, 4], [1, 1, 1, 1])).toEqual([1, 2, 3, 4]);
    expect(multiplyList([1, 2, 3], [2, 2, 2])).toEqual([2, 4, 6]);
    expect(multiplyList([], [])).toEqual([]);
    expect(multiplyList([3, 5, 7], [9, 10, 11])).toEqual([27, 50, 77]);
    expect(multiplyList([5, 10, 15, 20], [1, 2, 3, 4])).toEqual([5, 20, 45, 80]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  test('sequence - generates an array from 1 to the number (inclusive)', () => {
    expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
    expect(sequence(3)).toEqual([1, 2, 3]);
    expect(sequence(1)).toEqual([1]);
    expect(sequence(5)).toEqual([1, 2, 3, 4, 5]);
    expect(sequence(100).length).toEqual(100);
    expect(sequence(1001).length).toEqual(1001);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
