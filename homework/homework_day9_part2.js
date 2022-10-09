// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers 
 (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
// creatind the function that returns an array of random elements
// this function has 2 parameters
let randomArray = [];
const createArray = (nrOfItems, maxRandomNumber) => {
  for (let i = 0; i < nrOfItems; i++) {
    let giveMeRandom = Math.floor(Math.random() * maxRandomNumber);
    randomArray.push(giveMeRandom);
  }
  return randomArray;
  console.log({ randomArray });
};
console.log(createArray(3, 19)); // these parameters need to be inputted
console.log({ randomArray });
//creating the checkArray function
const checkArray = (randomArray) => {
  let sum = 0;
  let sumArray = [];
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > 5) {
      console.log("Bigger than 5");
      sum += randomArray[i];
      sumArray.push(randomArray[i]);
    } else {
      console.log("Smaller or equal to 5");
    }
  }
  console.log({ sum });
  console.log({ sumArray });
  return sum;
};
checkArray(randomArray);

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a 
 price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/
const eCommerce = {
  itemName: "Almonds",
  price: 8,
  id: "#010A",
  quantity: 50000,
};
const eCommerce1 = Object.assign({}, eCommerce);
eCommerce1.itemName = "Figs";
eCommerce1.price = 4;
eCommerce1.id = "#010B";
eCommerce1.quantity = 1000000;
const eCommerce2 = Object.assign({}, eCommerce);
eCommerce2.itemName = "Plums";
eCommerce2.price = 3;
eCommerce2.id = "#010C";
eCommerce2.quantity = 2000000;
const eCommerce3 = Object.assign({}, eCommerce);
eCommerce3.itemName = "Squash";
eCommerce3.price = 2;
eCommerce3.id = "#010D";
eCommerce3.quantity = 30000;

const shoppingCart = [];
shoppingCart.push(eCommerce);
shoppingCart.push(eCommerce1);
shoppingCart.push(eCommerce2);
shoppingCart.push(eCommerce3);
console.log({ shoppingCart });

const shoppingCartTotal = (array) => {
  let totalDueToShop = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].price * array[i].quantity);
    totalDueToShop += array[i].price * array[i].quantity;
  }
  console.log({ totalDueToShop });
  return totalDueToShop;
};
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. 
 Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to 
  and returns the total number of items in the shoppingCart.
*/
const addToShoppingCart = (newObject) => {
  let totalNrOfItems = 0;
  shoppingCart.push(newObject);
  for (let i = 0; i < shoppingCart.length; i++) {
    totalNrOfItems += shoppingCart[i].quantity;
  }
  console.log({ totalNrOfItems });
};
console.log(
  addToShoppingCart({
    itemName: "Buttons",
    price: 1,
    id: "#010E",
    quantity: 10,
  })
);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. 
 Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and 
 returns the most expensive item in it.
*/
const maxShoppingCart = (array) => {
  let mostExpensiveItemPrice = 0;
  let mostExpensiveItemName = "";
  let result = [];
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i - 1].price < shoppingCart[i].price) {
      console.log("i-1: ", shoppingCart[i - 1].price);
      console.log("i: ", shoppingCart[i].price);
      mostExpensiveItemPrice = shoppingCart[i].price;
      mostExpensiveItemName = shoppingCart[i].itemName;
    } else if (shoppingCart[0].price > mostExpensiveItemPrice) {
      mostExpensiveItemPrice = shoppingCart[0].price;
      mostExpensiveItemName = shoppingCart[0].itemName;
    }
  }
  result.push(mostExpensiveItemName, mostExpensiveItemPrice);
  console.log({ result });
  return `The most expensive items are ${result[0]} at a price of $${result[1]} / bag`;
};
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
const latestShoppingCart = (array) => {
  let lastItem;
  for (let i = array.length - 2; i < array.length; i++) {
    lastItem = array[i];
  }
  console.log({ lastItem });
  return `The last items in the shoppingCart array are the ${lastItem.itemName}, whick have the id of ${lastItem.id} and the price of $${lastItem.price} / piece`;
};
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger 
 than x for three times in a row.
*/
const loopUntil = (x) => {};
console.log(loopUntil);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. 
 The function automatically skips non-numeric entries in the array.
*/
let mixedArray = ["s df", 3, 4, "sccgdg", true, 45];
const average = (array) => {
  let sum = 0;
  let average = 0;
  let numbersArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      numbersArray.push(array[i]);
      sum += array[i];
    } else {
      continue;
    }
  }
  console.log({ sum });
  console.log({ numbersArray });
  console.log(numbersArray.length);
  average = sum / numbersArray.length;
  console.log({ average });
};
console.log(average(mixedArray));

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/
let mixedStringArray = ["s df", "sccgdg", " ", "asdgasgasg sa asg "];
const longest = (array) => {
  let max = 0;
  let winningString = "";
  for (let i = 0; i < array.length; i++) {
    if (max < array[i].length) {
      max = array[i].length;
      winningString = array[i];
    }
  }
  return `the winning string is "${winningString}", because it has the maximum amount of characters: ${max}`;
};
console.log(longest(mixedStringArray));

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. 
 The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/
const antiSpam = (emailContent) => {
  return emailContent.toLowerCase().includes("spam") ||
    emailContent.toLowerCase().includes("scam")
    ? "this mail might be a SCAM/SPAM! Stay clear!"
    : true;
};
console.log(antiSpam("lkasj dk;sja dg spAm"));
console.log(antiSpam("lkasj dk;sja dgspAm"));
console.log(antiSpam("lkasj dk;sja dgsAm"));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number 
 of days passed since the given date.
*/
const dateCalculator = (dateInEposchTime) => {
  let secondsInDay = 86400;
  let currentDate = Math.floor(new Date().getTime() / 1000.0);
  let daysPast = Math.floor((currentDate - dateInEposchTime) / secondsInDay);
  console.log({ currentDate });
  console.log({ daysPast });

  return `based on the current time, ${daysPast} days have past since your inputted time`;
};
console.log(dateCalculator(1664652295));

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
const matrixGenerator = (x, y) => {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      console.log(`${i}${j}`);
      matrix.push(`${i}${j}`);
    }
  }
  console.log({ matrix });

  // TRIED TO SEE IF I CAN CREATE A MATRIX VISUALLY
  // let designMatrix = ["00", "01", "02", "10", "11", "12"];
  // for (let i = 0; i < designMatrix.length; i++) {
  //   if (designMatrix[i][y] === `y`) {
  //     designMatrix.splice(x, 0, "\n");
  //   }
  // }
  // console.log({ designMatrix });
};
console.log(matrixGenerator(3, 2));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
