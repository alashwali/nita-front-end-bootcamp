// start find vowels
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
// end find vowels

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
// start duplicates an array
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
// end duplicates an array

//  revers array
console.log(arr.reverse());
