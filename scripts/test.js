// Import the functions

const {
  sumOfArray,
  reverseString,
  isPalindrome,
  findMax,
} = require("./functions");

// Test for sumOfArray function

describe("Tests for sumOfArray()", () => {
  test("should add up positive numbers", () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
  });

  test("should add up negative numbers", () => {
    expect(sumOfArray([-1, -2, -3])).toBe(-6);
  });

  test("should return 0 for empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });

  test("should handle non-array inputs", () => {
    expect(sumOfArray([])).toBe(0);
    expect(sumOfArray(null)).toBe(0);
  });
});

// Test for reverseString function

describe("Tests for reverseString()", () => {
  test("should reverse a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("should handle numbers", () => {
    expect(reverseString(123)).toBe("321");
  });

  test("should handle null", () => {
    expect(reverseString(null)).toBe("");
  });
});

// Test for isPalindrome
describe("Tests for isPalindrome", () => {
  test("should return true for palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should ignore capitalization", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("should return flase for non palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should handle numbers", () => {
    expect(isPalindrome([12321])).toBe(true);
  });
});

// Test for findMax
describe("Tests for findMax", () => {
  test("should return largest number in array", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });
  test("should return null for empty array", () => {
    expect(findMax([])).toBe(null);
  });

  test("should ignore non array values", () => {
    expect(findMax([1, "hello", 10, null, 7])).toBe(10);
  });

  test("should handle non array inputs", () => {
    expect(findMax("hello")).toBe;
  });
});
