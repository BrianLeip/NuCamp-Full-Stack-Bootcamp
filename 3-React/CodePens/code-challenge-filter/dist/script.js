const pets = ["goldfish", "dog", "turtle", "tiger"]

//1 
const petsShortNames = pets.filter(name => name.length <= 5);
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);

//2 - uncomment line 9 and line 11 when you've finished challenge 1
const petsTNames = pets.filter(name => name[0] === 't');
// The below line should console.log: ["turtle", "tiger"] 
console.log(petsTNames);

const numbers = [3, 7, 4, 5, 10];
//3 - uncomment line 15 and line 17 
const numbersBiggerThanFour = numbers.filter(n => n>4);
// The below line should console.log: [7, 5, 10]
console.log(numbersBiggerThanFour);

//Bonus - uncomment line 20 and line 22
const evenNumbers = numbers.filter(n => n % 2 === 0);
// The below line should console.log: [4, 10]
console.log(evenNumbers);