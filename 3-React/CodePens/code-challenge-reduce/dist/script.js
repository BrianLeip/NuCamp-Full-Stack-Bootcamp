// 1
const letters = ['h', 'e', 'l', 'l', 'o']
const greeting = letters.reduce((a, c) => a+c);
// The below line should console.log: "hello"
console.log(greeting) 

// 2 - uncomment lines 9 and 11
const numbers = [ 100, 3, 4, 1, 2];
const total = numbers.reduce((total, n) => total*n);
// The below line should console.log: 2400
console.log(total); 

//Bonus - uncomment lines 15 and 17
const arrays = [["how", "now"], ["brown", "cow"]];
const flattenedArray = arrays.reduce((arr, subArr) => arr.concat(subArr));
// The below line should console.log: ["how", "now", "brown", "cow"]
console.log(flattenedArray);