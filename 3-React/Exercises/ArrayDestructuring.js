// ARRAY DESTRUCTURING
const myArray = [0, 1, 2, 3];
console.log(`My array is ${myArray}`);

let someVar = myArray[0];
console.log(`someVar=${someVar}`);

const [one, two, three, four] = myArray;
console.log(`one=${one}, two=${two}, three=${three}, four=${four}`);


// OBJECT DESTRUCTURING
// NOTE: With Object Destructing in JS, the variable names need to match the original exactly, but the order doesn't matter.  This is different from
//       Array destructing (above) and from Tuple unpacking in other programming languages
const user = {
  id: 0,
  name: "Brian",
  country: "USA",
  city: "Orange",
  state: "California"
};
// console.log(user);

console.log(`The current user is ${user.name}`);

const {id, name, country, city, state} = user;
console.log(`id=${id}, name=${name}, city=${city}, state=${state}, country=${country}`);


// GIVE AN OBJECT A DEFAULT VALUE
const {createdDate = [`09/18/2020`]} = user;
console.log(user);


// GIVE A PROP AN ALIAS
const {name: userName} = user;
console.log(`Your user name is ${userName.toLowerCase()}`);


// GRAB REMAINING UNSPECIFIED VARIABLES
const user2 = {
  id2: 0,
  fName2: "Brian",
  lName2: "Leip",
  country2: "USA",
  city2: "Orange",
  state2: "California"
};
const {state2, lName2, fName2, ...rest} = user2;  // select the variables you need, then use ...someVariableName to grab the remaining unspecified variables
console.log(rest);