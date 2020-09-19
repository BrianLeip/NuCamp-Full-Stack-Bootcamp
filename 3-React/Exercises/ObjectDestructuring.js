const hotel = {
  id: 0,
  city: "Honolulu",
  name: "Hotel Honolulu"
};

console.log("\n*** EXPLICIT OBJECT VARIABLE EXTRACTION ***")
const id1 = hotel.id;
const city1 = hotel.city;
const name1 = hotel.name;
console.log(`Hotel ${id1}: ${name1} located in ${city1}`);

console.log("\n*** OBJECT DESTRUCTURING ***")
const { id2, city2, name2 } = hotel; // object destructing to create new variables (NOTE: does not work. Variable names need to match original variable names)
console.log(`Hotel ${id2}: ${name2} located in ${city2}`);
const { id, city, name } = hotel; // object destructing to create new variables
console.log(`Hotel ${id}: ${name} located in ${city}`);

console.log("\n*** EXPLICIT FUNCTION PROP EXTRACTION ***")
function logHotelInfo1(hotel) {
  const id = hotel.id;
  const city = hotel.city;
  const name = hotel.name;
  console.log(`Hotel ${id}: ${name} located in ${city}`);
}
logHotelInfo1(hotel);

console.log("\n*** OBJECT DESTRUCTURING IN FUNCTION PROPS ***")
function logHotelInfo2({id, name, city}) {  // object destructuring as function properties
  console.log(`Hotel ${id}: ${name} located in ${city}`);
}
logHotelInfo2(hotel);