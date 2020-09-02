// JAVASCRIPT OBJECTS 

// standard JS Object (similar to a class)
const dragon1 = {
  color: "red",
  maxHP: 1000
};

console.log(`The ${dragon1.color} dragon has ${dragon1.maxHP} hit points.`)

// JS Object with a function
const dragon2 = {
  color: "blue",
  maxHP: 1000,
  roar() {    // modern ES6 way of adding a function to a JS Object
    console.log("The blue dragon roars from it's icy cave.")
  }
};

dragon2.roar()

// JS Object with a function declared the old way
const dragon3 = {
  color: "black",
  maxHP: 1000,
  roar: function() {    // older way of adding a function to a JS Object.  Will still see out in the wild sometimes.
    console.log("The black dragon roars from the murky depths.")
  }
};

dragon3.roar()

// Adding variables to JS objects and changing variable values
// Note 1 - to add functions, you need to use the old function declaration syntax
// Note 2 *IMPORTANT* - even if a JS Object itself is declared as a const, it's variables and methods can still be changed.  But the entire object itself can't be reassigned
dragon1.element = "fire";
dragon1.color = "crimson";
dragon1.attack = function() {
  console.log("The dragon breathes a stream of white-hot flame at you!")
};

console.log(dragon1)
dragon1.attack()

// Override an existing method
dragon2.roar = function() {
  console.log("The blue dragon roars mightily, and drops of rain begin to fall.")
}

dragon2.roar()

// dragon3 = { color: "test" } // cannot reassign the entire JS object since it is a const

dragon2.element = "water";
dragon2.swim = function(direction) {
  console.log(`The blue dragon swims away to the ${direction}.`)
}

dragon2.swim("left")


// Using 'this' in JS
dragon1.roar = function(direction) {
  console.log(`The ${this.color} dragon lets out a tremendous roar, and even from afar, you can feel the warmth on your skin.`)
}

dragon1.roar()