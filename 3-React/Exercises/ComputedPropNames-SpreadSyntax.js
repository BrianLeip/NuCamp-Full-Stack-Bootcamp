// COMPUTED PROPERTY NAMES
// creates dynamicly named variables.  Useful when variable names are passed in, but you don't know what the name will be
console.log("*** COMPUTED PROPERTY NAMES ***");
const myProperty = "foo";
const myObject = {
  [myProperty]: "This is a test"  // uses a custom, dynamic variable name
}
console.log(myObject);


// SPREAD SYNTAX
// Allows you to pull out ("spread") a copy of what's inside the array or object
// Can be used with both arrays and objects
console.log("\n*** SPREAD SYNTAX - ARRAYS ***");
const landVehicles = ["sedan", "truck", "van"];
const waterVehicles = ["canoe", "sailboat", "submarine"];
const vehicles = [...landVehicles, ...waterVehicles]; // ... spreads out the variable values so they can be combined in this case
console.log(`vehicles: ${vehicles}`);
const moreLandVehicles = [...landVehicles, "tank"];   // in this case, ... adds all individual values to a new array
console.log(`moreLandVehicles: ${moreLandVehicles}`);
const mixNMatch = [...landVehicles, "banana", 3, 3, {someObjProperty: "someObjPropertyValue" }, ...waterVehicles];
console.log(`MixNMatch: ${mixNMatch}`);

console.log("\n*** SPREAD SYNTAX - OBJECTS ***");
const objOne = { color: "blue", height: 12 };
const objTwo = { material: "ceramic", width: 6 };
const objOneAndTwoCombined = { ...objOne, ...objTwo };
console.log("objOneAndTwoCombined:");
console.log(objOneAndTwoCombined);
const objThree = { color: "red", width: 7 };
const objOneAndThreeCombined = { ...objOne, ...objThree };  // note objThree overrides objOne's color when they're combined.  JS goes left to right order.
console.log("objOneAndThreeCombined:");
console.log(objOneAndThreeCombined);
const objOneUpdatedHeight = { ...objOne, height: 300 }; // can use spread first, then manually override a specific variable
console.log("objOneUpdatedHeight:");
console.log(objOneUpdatedHeight);