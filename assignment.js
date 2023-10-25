// => Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.

// function areaOfTriangle(a, b, c) {
//   s = (a + b + c) / 2;
//   s = s * (s - a) * (s - b) * (s - c);
//   area = Math.sqrt(s);
// }
// areaOfTriangle(6, 3, 7);
// console.log(area);

// Problem 2: Write a function to convert degrees to radians.

// function radians(d) {
//   r = (d * Math.PI) / 180;
// }
// radians(120);
// console.log(r);

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

// function calculateFactorial(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     let factorial = 1;
//     for (let i = n; i >= 1; i--) {
//       factorial = factorial * i;
//     }
//     return factorial;
//   }
// }
// console.log(calculateFactorial(3));
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
// function isPrime(p) {
//   if (p < 2) {
//     return false;
//   }
//   for (let i = 2; i <= p; i++) {
//     if (p % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(isPrime(13));

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
// const a = ["sohan", "raihan", "rony,"];
// const b = ["rakib", "shamim", 5];
// function mergeArrays(a, b) {
//   c = a + b;
//   return c;
// }
// mergeArrays(a, b);
// console.log(c);

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

// function isLeapYear(year) {
//   if (year % 400 == 0 || (year % 4 == 0) & (year % 100 !== 0)) {
//     return "it is leap year";
//   } else {
//     return "Not leap year";
//   }
// }
// console.log(isLeapYear(2028));
// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

// function convertToCelsius(f) {
//   c = ((f - 32) * 5) / 9;
//   console.log(c);
// }
// convertToCelsius(68);

// Problem 9: Write a function to find the maximum of five numbers.
// let number = [5, 10, 15, 6, 15];
// function max(number) {
//   if number
// }
// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

// function evenOdd(string) {
//   let total = string.length;
//   if (total % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(evenOdd("JavaScript"));
// console.log(evenOdd("Hello"));
// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
/*Different between if…else and Switch: if ... else statement mainly uses to compare weather a condition is true or false. If the condition is true it will process its statements. If the condition is not true it will check else statement and process the else statements. 
Otherwise the switch statement checks the value of a variable with many different options. When the condition is match, the statement of that case will be executed.*/

// 2. What is JavaScript, and what is its primary purpose in web development?
/*What is JavaScript : JavaScript is a programming language that is mainly used for making Website. It can change and update the HTML and CSS.
 Primary purpose of js is to make a website interactive with the user.*/

// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.
/*var: var can be redecler. It work both global and block scope.
let: let cann't be redecled. If we declear a variable in block scope using let we cann't use the variable in global scope.
const: It cannot change and redeclear. we also cannot accesse from outside a block if we declear a vriable using const into a block.*/
// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

// 5. What is the difference between "null" and "undefined" in JavaScript?

// => Assignment Deadline + Marks:
// 1. Each question value is 5 marks.
// 2. The deadline to submit your assignment is October 25, 2023, at 8:00 PM.
