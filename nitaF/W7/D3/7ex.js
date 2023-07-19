// check if number is P,N,Zero
function numbers(num) {
  let n = Math.sign(num);
  if (n == 1) {
    return `Positive`;
  } else if (n == -1) {
    return `Negative`;
  } else {
    return `Zero`;
  }
}
console.log(numbers(5));
console.log(numbers(-5));
console.log(numbers(0));

// find thw longest word in a string
function longestWord(str) {
  str = str.match(/[a-zA-Z0-9]+/gi);
  let largest = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > largest.length) {
      largest = str[i];
    }
  }
  return largest;
}
console.log(longestWord("asma ahmed alashwali"));

// calc factorial of number
function factorial(number) {
  let r = 1;
  for (let i = number; i >= 1; i--) {
    r *= i;
  }
  return r;
}
console.log(`factorial= ${factorial(4)}`);
// valid URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
console.log(validURL("https://www.google.com/"));

//  valid email
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
let testEmails = [
  "notanemail.com",
  "workingexample@email.com",
  "another_working@somethingelse.org",
  "notworking@1.com",
];
testEmails.forEach((address) => {
  console.log(regex.test(address));
});

//  duplicates an array
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// sum array elements
let array1 = [10, 20, 30, 40, 50];
function sumArr(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sumArr(array1));

//
