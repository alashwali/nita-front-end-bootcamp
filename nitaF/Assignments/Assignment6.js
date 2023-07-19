// 1]Function to Reverse a String.
function reverseString(text) {
  return text.split("").reverse().join("");
}
console.log(reverseString("Asma Ahmed"));

// 2]Function to check whether a String is Palindrome or not.
function checkPalindrome(str) {
  let StringTLC = str.toLowerCase();
  return StringTLC == StringTLC.split("").reverse().join("");
}
console.log(checkPalindrome("MOm"));

// 3]Function to calculate the number of Vowels & Consonants in a String.

function countVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  let countConsonants = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      countVowels++;
    } else if (letter != "") {
      countConsonants++;
    }
  }
  return `Vowels Number is ${countVowels}\n Consonants Number is ${countConsonants}`;
}
console.log(countVowel("this is Vowels and Consonants Demo"));

// 4]Function to find the common Elements in an Array.
function CommonItemsArray(arr1, arr2) {
  var commonArray = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        commonArray.push(arr1[i]);
      }
    }
  }
  // to remove duplicates from an array
  commonArray = [...new Set(commonArray)];
  return commonArray;
}
var array1 = [10, 20, 30, 40, 50];
var array2 = [20, 30, 60, 70, 90];
console.log(
  `The common elements present in both arrays are: ${CommonItemsArray(
    array1,
    array2
  )}`
);

// 5]Function to check if a String is an Anagram of another String or not.
function checkAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var str1 = a.split("").sort().join("");
  var str2 = b.split("").sort().join("");
  var result = str1 === str2;
  return result;
}
console.log(checkAnagram("abc", "cba"));
