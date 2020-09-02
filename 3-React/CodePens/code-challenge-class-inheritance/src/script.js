class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    breatheFire() {
      console.log(`The ${this.color} ${this.element} ${this.type} breathes a jet of ${this.color} fire.`)
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar();
woodDragon.fly();
woodDragon.breatheFire();

const werewolf1 = new Werewolf('werewolf', 'gray');
werewolf1.howl();

class Skeleton extends Monster {
  constructor(type, color, formerType) {
    super(type, color);
    this.formerType = formerType;
  }
  reassemble() {
    console.log(`The ${this.type}-${this.formerType}'s ${this.color} bones begin to reassemble themselves, as it slouches towards you amidst the moldering crypt.`)
  }
}

const skeletonWerewolf = new Skeleton("skeleton", "white", "werewolf");
skeletonWerewolf.reassemble();