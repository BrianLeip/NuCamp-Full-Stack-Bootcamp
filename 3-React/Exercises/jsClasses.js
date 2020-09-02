// JAVASCRIPT CLASSES

class Dragon {
  constructor(color, maxHP) {   // Can only have 1 constructor in JS.  
    this.color = color;
    this.maxHP = maxHP;
  }
  roar() {
    console.log (`The ${this.color} dragon lets out a mighty roar!`)
  }
}

// In JS, you need to use the 'new' keyword to create an instance of a class
const dragon1 = new Dragon("red", 1200);
const dragon2 = new Dragon("blue", 1000);

dragon1.roar()
dragon2.roar()

// If you are not assigning any values, can skip the constructor
class Monster {
  roar() {
    console.log("The monster lets out a tremendous roar!");
  }
}

// To create a child class in JS, use the 'extends' keyword
class Griffon extends Monster {
  fly() {
    console.log("The griffon flaps its wings and begins to fly.")
  }
} 

const monster1 = new Monster();
const griffon1 = new Griffon();

monster1.roar()
// monster1.fly()  // can't do this since the monster parent class doesn't have the fly method
griffon1.roar()   // griffon inherits the roar method from Monster parent
griffon1.fly()

class Demon {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.isScary = true;  // if a variable will always be assigned a specific value, put it in constructor body but not arguments
  }
  roar() {
    console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
  }
}

class Warlock extends Demon {
  constructor(type, color, element) {
    super(type, color); // use the 'super' keyword to inherit from parent class constructor/variables
    this.element = element;
  }
  castSpell() {
    console.log(`The ${this.color} ${this.type} gathers energy into the ${this.element} orb on it's wand and begins to cast a spell.`)
  }
}

const demon1 = new Demon('diablo', 'red')
demon1.roar()
// demon1.castSpell()  // can't do
const demon2 = new Warlock('warlock', 'blue', 'ice')
demon2.roar()
demon2.castSpell()

// ES6 NOW ALLOWS DEFAULT CONSTRUCTOR ARGUMENTS SO YOU DON'T HAVE TO SET EACH ONE IF NOT NECESSARY
class Cat {
  constructor(name, color, motive='plotting to kill you') {
    this.name = name;
    this.color = color;
    this.motive = motive;
  }
  meow() {
    console.log(`The ${this.color} cat named ${this.name} meows because it is ${this.motive}.`)
  }
}

const tabby = new Cat('Tabby', 'gray');
const grumblor = new Cat('Grumblor', 'tan', 'hoping for food');
tabby.meow()
grumblor.meow()