// Functions
// sumOfArray, reverseString, isPalindrome, findMax

//1. sumOfArray
function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum = sum + arr[i];
    }
  }

  return sum;
}

// 2. reverseString - Reverses a string

function reverseString(str) {
  if (str === null || str === undefined) {
    return "";
  }

  if (typeof str !== "string") {
    str = String(str);
  }

  if (str.length === 0) {
    return "";
  }

  return str.split("").reverse().join("");
}

// 3. isPalindrome - Checks whether a string is a palindrome

function isPalindrome(str) {
  if (str === null || str === undefined) {
    return false;
  }

  if (typeof str !== "string") {
    return true;
  }

  let cleanStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "," && str[i] !== ":" && str[i] !== "!") {
      cleanStr = cleanStr + str[i].toLowerCase();
    }
  }

  let reversed = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversed = reversed + cleanStr[i];
  }

  return cleanStr === reversed;
}

// 4. findMax(arr)

function findMax(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }
  return max;
}

module.exports = { sumOfArray, reverseString, isPalindrome, findMax };
