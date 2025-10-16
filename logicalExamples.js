// 🧩 Problem 1:
// Ek number diya gaya hai — check karo ke wo even (joda) hai ya odd (bejoda).
// Example:
function checkEvenOdd(number) {
  if (number % 2 == 0) {
    console.log("odd");
  } else {
    console.log("even");
  }
}
checkEvenOdd(12);

// 🧩 Problem 2:
// Ek number diya gaya hai — check karo ke wo positive, negative, ya zero hai.
// Example:
function checkNumber(number) {
  if (number > 0) {
    console.log("positive");
  } else if (number < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}
checkNumber(-5);

// 🧩 Problem 3:
// Do numbers diye gaye hain — in dono me se bada number find karo.
// Example:
function findLargenumber(number1, number2) {
  if (number1 > number2) {
    console.log("large to Number1");
  } else if (number1 < number2) {
    console.log("large to Number2");
  } else {
    console.log("number1 number2 Both are same");
  }
}
findLargenumber(9, 90);

// Use Ternary Operator to solve Problem 3
function findLargenumber(num1, num2) {
  num1 > num2
    ? console.log("large to Number1")
    : num1 < num2
    ? console.log("large to Number2")
    : console.log("number1 number2 Both are same");
}
findLargenumber(9, 90);

// 🧩 Problem 4
// Ek number lo, aur uska factorial find karo.
// Example → 5
function findFactorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

findFactorial(2);

//🧩 Problem 5
// 1 se 100 tak sab odd numbers print karo.
function printOddNumbers() {
  for (let num = 1; num <= 100; num++) {
    if (num % 2 != 0) {
      console.log(num);
    }
  }
}
printOddNumbers();

//🧩 Problem 6
// 1 se 100 tak sab even numbers print karo.
function printEvenNumbers() {
  for (let num = 1; num <= 100; num++) {
    if (num % 2 == 0) {
      console.log(num);
    }
  }
}
printEvenNumbers();

//🧩 Problem  7
// Ek number lo aur uske digits ka sum nikalo.
function Sum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(Sum(777));

//🧩 Problem 8
// Find karo har number kitni baar aaya hai (frequency count).
let arry = [2, 3, 2, 5, 3, 2, 6];
let count = {};

for (let i = 0; i < arry.length; i++) {
  let id = arry[i];
  count[id] = (count[id] || 0) + 1;
  console.log(count);
}

// 🧩 Problem 9 — Remove Duplicates from Array
let arry1 = [1, 2, 3, 2, 4, 1, 5];
let count1 = [];

for (let i = 0; i < arry1.length; i++) {
  let result = count1.includes(arry1[i]);
  if (!result) {
    count1.push(arry[i]);
  }
  console.log(1, result);
}

// same way use to Set Method
let arry2 = [1, 2, 3, 2, 4, 1, 5];
let result = new Set();

for (let i = 0; i < arry2.length; i++) {
  result.add(arry2[i]);
  console.log(result);
}

// 🧩 Problem 10 — Second Largest Number
// Ek array [10, 40, 20, 30, 50,45] diya gaya hai.
// Find karo second largest number.
let num = [10, 40, 20, 30, 50, 45];
let largest = 0;
let second = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] > largest) {
    second = largest;
    largest = num[i];
  } else if (num[i] > second && num[i] < largest) {
    second = num[i];
  }
}

console.log("second large no", second);

// 🧩 Problem 11 — Count Vowels in String
// Ek string "javascript is cool" lo.
// Count karo kitne vowels (a, e, i, o, u) hain.
let vowels = ["a", "e", "i", "o", "u"];
let str = "javascript is cool";

let count2 = 0;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count2++;
  }
}

console.log(count2);

// 🧩 Problem 12 — Find Missing Number
// Array diya gaya hai [1, 2, 3, 5, 6]
// Ek number missing hai (4).
// Find karo missing number.
const arr = [1, 2, 3, 5, 6];
const n = 6;
const expectedSum = (n * (n + 1)) / 2;
const actualSum = arr.reduce((a, b) => a + b, 0);
const missing = expectedSum - actualSum;

console.log("Missing number:", missing);

// 🧩 Problem 13 — Sort Array Without Using sort()
// Array [5, 3, 8, 1, 2] ko ascending order me sort karo
// without using .sort() method.
let ar = [5, 3, 8, 1, 2];
for (let i = 0; i < ar.length; i++) {
  let index = i;
  for (let j = i + 1; j < ar.length; j++) {
    if (ar[j] < ar[index]) {
      index = j;
    }
  }

  let temp = ar[i];
  ar[i] = ar[index];
  ar[index] = temp;
}

console.log(ar);

// 🧩 Problem 14 — Reverse Each Word
// String "hello world" ko convert karo → "olleh dlrow".
let str1 = "hello world";
let words = str1.split(" ");
let result1 = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let reverseWord = "";

  for (let j = word.length - 1; j >= 0; j--) {
    reverseWord = reverseWord + word[j];
  }
  result1 = result1 + reverseWord;
}

console.log(result1);

// 🧩 Problem 15 — Check Anagram Strings
// "listen" aur "silent" → dono same letters se bane hain.
// Check karo ke strings anagram hain ya nahi.
let string1 = "listen";
let string2 = "silent";
string1 = string1.toLowerCase().split("").sort().join("");
string2 = string2.toLowerCase().split("").sort().join("");

if (string1 === string2) {
  console.log("true");
} else {
  console.log("false");
}

// 🧩 Problem 16: Vote Eligibility
// User ki age input lo — agar age >= 18 hai to "Eligible to vote",
// warna "Not eligible" print karo.
let age = 23;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// same way use ternary oprator
let age1 = 29;
age1 >= 18 ? console.log("true") : console.log("false");

// 🧩 Problem 17: Grade Calculato
// Marks input lo aur grade print karo:
// marks >= 90 → "A+"
// marks >= 80 → "A"
// marks >= 70 → "B"
// marks >= 50 → "C"
// warna "Fail"

function ExamResult(marks) {
  if (marks >= 90) {
    console.log("Congratulations: Your Grade Is A+");
  } else if (marks >= 80) {
    console.log("Congratulations: Your Grade Is A");
  } else if (marks >= 70) {
    console.log("Congratulations: Your Grade Is B");
  } else if (marks >= 50) {
    console.log("Congratulations: Your Grade Is C");
  } else {
    console.log("Best Of Luck Next Time Your Result : Fail");
  }
}

ExamResult(70);

// same Way Use Ternary Oprator
let studMarks = 88;

studMarks >= 90
  ? console.log("Congratulations: Your Grade Is A+")
  : studMarks >= 80
  ? console.log("Congratulations: Your Grade Is A")
  : studMarks >= 70
  ? console.log("Congratulations: Your Grade Is B")
  : studMarks >= 50
  ? console.log("Congratulations: Your Grade Is C")
  : console.log("Best Of Luck Next Time Your Result : Fail.");

// 🧩 Problem 18: Smallest of Two Numbers
// Do numbers compare karo aur print karo smaller number.
// Try both if-else and ternary versions.
function smallNum(sn1, sn2) {
  if (sn1 < sn2) {
    console.log("Number 1 Small to Number2");
  } else if (sn1 > sn2) {
    console.log("Number 2 Small to Number1");
  } else {
    console.log("Both Are Same Numbers");
  }
}
smallNum(11, 18);

// same way ternary oprator
let number1 = 10;
let number2 = 100;

number1 < number2
  ? console.log("number1 to small number2")
  : number1 > number2
  ? console.log("number2 to small number1")
  : console.log("Both Are Same");

//🧩 Problem 19 — Age Category
// Ek variable age diya gaya hai.
// Category print karo:
// age < 13 → "Child"
// age < 20 → "Teenager"
// age < 60 → "Adult"
// warna "Senior Citizen"

let currentAge = 55;
currentAge < 13
  ? console.log("Child")
  : currentAge < 20
  ? console.log("Teenager")
  : currentAge < 60
  ? console.log("Adult")
  : console.log("Senior Citizen");

// 🧩 Problem 20 — Login System
// Agar dono correct hain → "Login successful"
// Agar username galat hai → "Invalid username"
// Agar password galat hai → "Invalid password"
let username = "john";
let password = "12345";

username === "john"
  ? password === "12345"
    ? console.log("Login successful")
    : console.log("Invalid password")
  : console.log("Invalid username");

// 🧩 Problem 21 — Student Report System
// Ek array me students ke objects hain:
// Har student ka grade nikalna hai (A+, A, B, C, Fail) using if-else.
// Output kuch aisa ho:
// "Ali Grade A", "Mahdi Grade B", etc.
let student = [
  { name: "Ali", marks: 95 },
  { name: "Mahdi", marks: 82 },
  { name: "Sara", marks: 72 },
  { name: "Zain", marks: 45 },
];

for (let i = 0; i < student.length; i++) {
  if (student[i].marks >= 90) {
    console.log(`Name : ${student[i].name} : Result : A+ congratulations `);
  } else if (student[i].marks >= 80) {
    console.log(`Name : ${student[i].name} : Result : A congratulations `);
  } else if (student[i].marks >= 70) {
    console.log(`Name : ${student[i].name} : Result : B congratulations `);
  } else if (student[i].marks >= 60) {
    console.log(`Name : ${student[i].name} : Result : C congratulations `);
  } else {
    console.log("Best Of Luck Your Result : Fail.");
  }
}

// 🧩 Problem 22 — Word Frequency Counter
// Ek string lo :
// "i love javascript because javascript is fun"
// Count karo har word kitni baar aaya hai.

let string3 = "i love javascript because javascript is fun";
let words2 = str.split(" ");
let counts = {};

for (let i = 0; i < words2.length; i++) {
  let word = words2[i];

  if (counts[word]) {
    counts[word]++;
  } else {
    counts[word] = 1;
  }
}

console.log(counts);

// 🧩  Problem 23 — Simple Shopping Cart
// Ek array of items:
// [
//   { name: "Keyboard", price: 3000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Headphones", price: 4500 },
// ]
// Total price calculate karo
// Agar total > 8000 → "10% discount applied"
// Warna "No discount"
let object = [
  { name: "Keyboard", price: 3000 },
  { name: "Mouse", price: 1500 },
  { name: "Headphones", price: 4500 },
];

let total = 0;

for (let j = 0; j < object.length; j++) {
  total += object[j].price;
}

if (total >= 8000) {
  console.log("10% discount applied");
} else {
  console.log("No discount");
}

console.log(`Total Price: ${total}`);

// 🧩 Problem 24 — Custom Calculator (User Choice)
// User se num1, num2 aur operator (+, -, *, /) input lo.
// ternary operator se correct operation perform karo.
function userChoiceNum(one, two, operator) {
  operator === "+"
    ? console.log(one + two)
    : operator === "-"
    ? console.log(one - two)
    : operator === "*"
    ? console.log(one * two)
    : operator === "/"
    ? console.log(one / two)
    : operator === "**"
    ? console.log(one ** two)
    : console.log("Please enter a valid operator: + - * / **");
}

userChoiceNum(13, 13, "+");

// 🧩 Problem 25 sum 2 numbers
function sumTwoNum(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

sumTwoNum(12, 90);
