// 1 - white rabbit
const rabbit = { 
  color: "white",
  checkWatch() {
    console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
  }
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = { 
  name: "Falcon Heavy",
  launch() {
    alert(`You have launched the spaceship ${this.name}`);
  }
};
spaceship.launch();

// 3 - shopping cart
const cart = {
  contents: new Array(),
  addItem(item) {
    this.contents.push(item);
  },
  removeItem(item) {
    index = find(item);
    if (index) {
      this.contents.splice(index, 1);
      console.log(`Removed ${item} from the cart.`)
    }
    else {
      console.log(`Can't remove ${item}.  Not found in the cart.`)
    }
  }
};
cart.addItem("laptop");
console.log("The cart contains:", cart.contents);
cart.removeItem("butter");
cart.removeItem("laptop");

// 4 - lever
const lever = {
  stamp: "ACME",
  pull() {
    console.log(`An anvil stamped ${this.stamp} drops on your head.`)
  }
};
lever.pull();

// 5 - Your object here
const star = {
  temperature: 7000,
  energy: 0,
  hydrogen: 1000000,
  helium: 0,
  fusion(volume) {
    this.hydrogen -= 4*volume;
    this.energy = ((1.44*4)+(5.49*2)+12.86) * volume;
    this.helium += 1*volume;
    console.log(`Fusion in the star's core combined ${4*volume} hydrogen to form ${1*volume} helium, releasing ${this.energy} MeV of energy.`)
  }
}

star.fusion(100);