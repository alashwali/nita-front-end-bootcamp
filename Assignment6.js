// 1] Write a JavaScript Function to Reverse a String.
function reverseString(text) {
  return text.split('').reverse().join('')
}
console.log(reverseString("asma ahmed"))

// 2] Write a JavaScript Function to check whether a String is Palindrome or not.
function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}
console.log(checkPalindrom('text text'))

// 3] Write a JavaScript Function to calculate the number of Vowels & Consonants in a String.
let vowels = ["a", "e", "i", "o", "u"];
function countVowel(str) {
  // initialize count
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(
  `Number of Vowels is the String is: ${countVowel("this is a vowels demo")}`
);

// 4] Write a JavaScript Function to find the common Elements in an Array.
function count(str) {
  let count = str.trim().length;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter) || letter == " ") {
      count--;
    }
  }
  return count;
}
console.log(count("this is a vowels demo"));

// 5] Write a JavaScript Function to check if a String is an Anagram of another String or not.
function checkAnagram(a, b) {
     
  // Not of same length, can't be Anagram
  if (a.length !== b.length) {
      return false;
  }

  // Inbuilt functions to rearrange the string
  var str1 = a.split('').sort().join('');
  var str2 = b.split('').sort().join('');

  var result = (str1 === str2);
  return result;
}

// Checking the output
console.log(checkAnagram('abc', 'cba'));