/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
function area(l1, l2) {
  console.log(l1 * l2);
  return l1 * l2;
}
console.log(area(23, 78950));

/* EXERCISE 2
   Write a function called "crazySum" which receives two integers as parameters.
   It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
  */
const crazySum = (x, y) => {
  if (x === y) {
    console.log((x + y) * 3);
    return (x + y) * 3;
  } else {
    console.log(x + y);
  }
};
console.log(crazySum(23, 23));
console.log(crazySum(23, 3));

/* EXERCISE 3
   Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
   It should return triple their absolute difference if the given number is greater than 19.
  */
const crazyDiff = (nr) => {
  if (nr > 19) {
    console.log(Math.abs(nr - 19) * 3);
    return Math.abs(nr - 19) * 3;
  } else {
    console.log(Math.abs(nr - 19));
    return Math.abs(nr - 19);
  }
};
console.log(crazyDiff(23));
console.log(crazyDiff(-3));

/* EXERCISE 4
   Write a function called "boundary" which accept an integer parameter n 
   and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
  */
const boundary = (n) => {
  let result =
    (n > 20 && n <= 100) || n === 400 ? true : "n does NOT match the criteria";
  console.log(result);
  return result;
};
console.log(boundary(83));
console.log(boundary(-3));

/* EXERCISE 5
   Write a function called "strivify" which accepts a string as a parameter.
   It should add the word "Strive" in front of the given string, but if the given string already 
   begins with "Strive", then it should just return the original string.
  */
const strivify = (string) => {
  if (string.startsWith("Strive")) {
    console.log(string);
    return string;
  } else {
    console.log(`Strive ${string}`);
    return `Strive ${string}`;
  }
};
console.log(strivify("Strive sdg;asa;g "));
console.log(strivify(" sdg;asa;g"));

/* EXERCISE 6
   Write a function called "check3and7" which accepts a positive number as a parameter and checks 
   if it is a multiple of 3 or a multiple of 7.
   HINT: Modulus Operator
  */
const check3and7 = (posNr) => {
  let result =
    posNr % 3 === 0 || posNr % 7 === 0
      ? true
      : "the number is not a multiple of 3 OR 7";
  console.log(result);
  return result;
};
console.log(check3and7(21));
console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(2));

/* EXERCISE 7
   Write a function called "reverseString" which programmatically reverses a given s
   tring (es.: Strive => evirtS).
  */
const reverseString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
  return reversedString;
};
console.log(reverseString("Strive Strive"));

/* EXERCISE 8
   Write a function called "upperFirst" which capitalizes the first letter of each word of a given string 
   passed as a parameter.
  */
const upperFirst = (string) => {
  let capString = "";
  let stringArray = string.split(" ");
  console.log(stringArray);
  for (let i = 0; i < stringArray.length; i++) {
    let capWord = "";
    capWord += `${stringArray[i].charAt(0).toUpperCase()}${stringArray[i]
      .slice(1)
      .toLowerCase()}`;
    capString += `${capWord} `;
  }
  return capString;
};
console.log(upperFirst("as ds aDSam"));
// i ll find another solution

/* EXERCISE 9
   Write a function called "cutString" which creates a new 
   string without the first and last character of a given string passed as a parameter.
  */
const cutString = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === string.charAt(0) ||
      string[i] === string.charAt(string.length - 1)
    ) {
      continue;
    } else {
      newString += string[i];
      console.log({ newString });
    }
  }
  return newString;
};
console.log(cutString("Gas ds aDSamM"));

/* EXERCISE 10
   Write a function called "giveMeRandom" which accepts a number n and returns an array containing 
   n random numbers between 0 and 10.
  */
const giveMeRandom = (n) => {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 9 + 1)); // numbers between 1 and 9 [all included]
  }
  return randomArray;
};
console.log(giveMeRandom(4));
