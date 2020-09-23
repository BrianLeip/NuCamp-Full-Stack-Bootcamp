// TERNARY OPERATOR
console.log("*** TERNARY OPERATOR ***");
// first doing it the long way
const lightswitch = {
  switchState: "on",
  flipSwitch() {
    if (this.switchState === "on") {
      this.switchState = "off";
    } else {
      this.switchState = "on";
    }
  }
}
console.log(lightswitch);
lightswitch.flipSwitch();
console.log(lightswitch);

// now the ternary way
const lightswitch2 = {
  switchState: "on",
  flipSwitch() {
    (this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
  }
}
console.log(lightswitch2);
lightswitch2.flipSwitch();
console.log(lightswitch2);


// Ternary example when returning values
// 1st: the standard way
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
      return false;
  }
}
let age = 16;
console.log(`Can a ${age} year old vote?  ${canVote(age)}`);
age = 50;
console.log(`Can a ${age} year old vote?  ${canVote(age)}`);

// 2nd: using ternary
function canVote2(age) {
  // (age >= 18) ? return true : return false;  // can't use multiple returns in ternary operator
  return (age >= 18) ? true : false;  // but you can return the result from the ternary operator, so format it this way
}
age = 16;
console.log(`Can a ${age} year old vote?  ${canVote2(age)}`);
age = 50;
console.log(`Can a ${age} year old vote?  ${canVote2(age)}`);