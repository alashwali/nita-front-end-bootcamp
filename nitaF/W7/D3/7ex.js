// ------------------------------------check if number is P,N,Zero---------------------------------------
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

// ------------------------------------find thw longest word in a string---------------------------------------
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

// ------------------------------------calc factorial of number---------------------------------------
function factorial(number) {
  let r = 1;
  for (let i = number; i >= 1; i--) {
    r *= i;
  }
  return r;
}
console.log(`factorial= ${factorial(4)}`);

// ------------------------------------sum array elements---------------------------------------
// ------------------solution one---------------------
let array1 = [10, 20, 30, 40, 50];
function sumArr(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(`sum array elements: ${sumArr(array1)}`);
// ------------------solution tow---------------------
function getSum(sum, num) {
  return sum + Math.round(num);
}
console.log(`sum array elements: ${sumArr(array1)}`);

// ------------------------------------largest & smallest number in an array---------------------------------------
// ------------------solution one---------------------
function largestAndSmallestNum(array1) {
  let largest = array1[0];
  let smallest = array1[0];
  array1.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
    if (element < smallest) {
      smallest = element;
    }
  });
  return `Largest Number in This Array: ${largest},and The Smallest Number in This Array: ${smallest}`;
}
console.log(largestAndSmallestNum(array1));
// ------------------solution tow---------------------
const largest = Math.max(...array1);
const smallest = Math.min(...array1);
console.log(
  `Largest Number in This Array: ${largest},and The Smallest Number in This Array: ${smallest}`
);

// ------------------------------------calc average in an array---------------------------------------
function average() {
  return sumArr(array1) / array1.length; // call sum function
}
console.log(average());

// ------------------------------------square & cube---------------------------------------
let square, cube;
// ------------------solution one---------------------
function sAC(num) {
  square = num ** 2;
  cube = num ** 3;
  return `${num} square:${square}, cube:${cube}`;
}
console.log(sAC(5));

// ------------------solution tow---------------------
let saC = (num) =>
  `${num} square: ${Math.pow(num, 2)} ,cube: ${Math.pow(num, 3)}`;
console.log(saC(5));

// ------------------------------------valid URL---------------------------------------
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

// ------------------------------------valid email---------------------------------------
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

// ------------------------------------duplicates an array---------------------------------------
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
