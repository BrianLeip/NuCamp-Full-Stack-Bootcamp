// JAVASCRIPT ADVANCED ARRAY METHODS

// MAP, FILTER, REDUCE
// Note that these methods don't modify the original array, but return a modified array.  So use array1 = array1.map()


// MAP
// .map() iterates through the array and applies a function to each item.  Similar to a loop but more efficient
// reminds me of .apply in python/Pandas.  See this site about differences https://www.geeksforgeeks.org/difference-between-map-applymap-and-apply-methods-in-pandas/#:~:text=apply()%20method%20can%20be,function%2C%20dictionary%20or%20a%20list.

const arrMap1 = [5, 21, 8, 100];   // set up initial array

// Example of using for loop to multiply all items by 2
const arrMap2 = [];  // note that even though const is used, in JS, const array individual values can still be modified.  You just can't reassign the entire array.
for (let i = 0; i< arrMap1.length; i++) {
  arrMap2[i] = arrMap1[i] * 2;
}
console.log(arrMap2)

// Example of using foreach loop to multiply all items by 2
const arrMap3 = [];
arrMap1.forEach((n, i) => { arrMap3[i] = n*2; })
console.log(arrMap3)

// Example of using .map() to multiply all items by 2
const arrMap4 = arrMap1.map(n => n * 2);
console.log(arrMap4)


// FILTER
// .filter() does what you expect, filters out items in an array based on criteria and returns the filtered array

const arrFilter1 = [1, 3, 7, 4, 9, 15];   // set up initial array
const arrFilter2 = arrFilter1.filter(n => n < 7);
console.log(`Before filter: ${arrFilter1}`);
console.log(`After filter: ${arrFilter2}`);

const animals = ['bear', 'panda', 'penguin', 'osprey'];
const filteredAnimals = animals.filter(animal => animal.includes('p'));
console.log(`Before filter: ${animals}`);
console.log(`After filter: ${filteredAnimals}`);


// REDUCE
// .reduce() only returns a single value instead of an array.  It's a bit more complex than map or filter
// takes 2 values: a and c
// syntax = array.reduce((a, c) => [logic], [initial value])
// a = accumulator (aka running total), c = current value
// Reduce is most commonly used for a sum total of an array of ints or floats.  Can also use for avg or other aggregator functions.
// Another use of reduce is to flatten an array with nested arrays (but JS has a .flat() method that's better suited for this)
// Reduce can also be used to create an object with nested values (accumulator is the new object).  Good example using a pokemon object here https://alligator.io/js/finally-understand-reduce/

const arrReduce1 = [3, 4, 13, 8, 22];
const reducedValue = arrReduce1.reduce((a, c) => a + c);
console.log(`Before reduce: ${arrReduce1}`);
console.log(`After reduce: ${reducedValue}`);


// ARRAYS OF OBJECTS

// create an array of dessert objects
const desserts = [
  { 
    id: 0, 
    type: "cake",
    flavor: "chocolate",
    cost: 4.50
  },
  {
    id: 1,
    type: "pie",
    flavor: "pumpkin",
    cost: 3.75
  },
  {
    id: 2,
    type: "donut",
    flavor: "chocolate",
    cost: 1.50 
  }
];

console.log(`\nAll desserts:`);
desserts.forEach((dessert, i) => { console.log(`Dessert ${i+1}: ${dessert.flavor} ${dessert.type}`); });

const chocolateDesserts = desserts.filter(dessert => dessert.flavor === "chocolate");
console.log(`\nChocolate desserts:`);
chocolateDesserts.forEach((dessert, i) => { console.log(`Dessert ${i+1}: ${dessert.flavor} ${dessert.type}`); });

// const totalCost = desserts.reduce((total, dessert) => total + dessert.cost);  // does not work since it's creating a full object. Need to initialize value to int (zero)
const totalCost = desserts.reduce((total, dessert) => total + dessert.cost, 0);
console.log(`\nDessert total cost: ${totalCost}`);


// METHOD CHAINING
// using multiple methods on the same line.  Very familiar with this after using Python/Pandas
const states =  ["Washington", "Maine", "Montana"];
console.log(`\nStates: ${states}`)

const mStates = states.filter(state => state[0] === 'M');
console.log(`M States: ${mStates}`)

const mStatesUpper1 = mStates.map(state => state.toUpperCase());
console.log(`M States Upper: ${mStatesUpper1}`)


// now, chain the filter and map into 1 line
const mStatesUpper2 = states.filter(state => state[0] === 'M').map(state => state.toUpperCase());
console.log(`M States Upper Chained: ${mStatesUpper2}`)

const bird = {
  sing() {
      console.log("The bird sings.");
  },
  fly() {
      console.log("The bird flaps its wings.");
  }
}
console.log("\nNot chained:")
bird.sing();
bird.fly();
// bird.sing().fly();  // can't chain these because they don't have return values

// Update the methods to return 'this' so they can be chained
bird.sing = function() {
  console.log("The bird sings.");
  return this;
}

bird.fly = function() {
  console.log("The bird flaps its wings.");
  return this;
}
console.log("\nChained:")
bird.sing().fly();  // now you can chain the methods

// for chaining to work, you need to `return this` on all methods except the last method called
const horse = { 
  trot() {
      console.log("The horse begins to trot.");
      return this;
  },
  gallop() {
      console.log("The horse begins to gallop.")
      return this;
  },
  sprint() {
    console.log("The horse begins to sprint.")
    // return this;
  }
};

horse.gallop().trot().sprint();