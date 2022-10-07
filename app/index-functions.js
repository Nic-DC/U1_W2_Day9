const person = {
  name: "F",
  surname: "s",
  skills: [1, 2, 3],
};

const pers = Object.keys(person);
console.log({ pers });

const entries = Object.entries(person);
console.log({ entries });

// we create an empty object that we will fill with the contents of the person object
let person2 = {};

// we iterate through the entries of the person object and fill person2 with the contents of person
for (let arr of entries) {
  console.log(`This entry is the KEY: ${arr[0]}`);
  console.log(`This entry is the VALUE of the key: ${arr[1]}`);
  person2[arr[0]] = arr[1];
}

// we check that the 2 objects are not the same even though their content is the same
console.log({ person2 });
switch (person) {
  case person2:
    console.log("person is the same as person2");
    break;
  default:
    console.log("the objects are NOT similar");
    break;
}

// accessing the contents of a string:
let string = "Hellooo Braaa!";
let modString = "";

for (let str of string) {
  if (str.toLowerCase() === "l") {
    continue;
  }
  if (str === " ") {
    break;
  }
  console.log(str);
  modString += str + " ";
}
console.log(modString);

// capitalize every 2nd letter from each word + replace " " with "-" using split & join
