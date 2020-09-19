const hotel = {
  id: 0,
  city: "Honolulu",
  name: "Hotel Honolulu"
};

const id = hotel.id;
const city = hotel.city;
const name = hotel.name;
console.log(`Hotel ${id}: ${name} located in ${city}`);

const { id2, city2, name2 } = hotel; // object destructing to create new variables (EDIT: not working for some reason...)
console.log(`Hotel ${id2}: ${name2} located in ${city2}`);

function logHotelInfo1(hotel) {
  const id = hotel.id;
  const city = hotel.city;
  const name = hotel.name;
  console.log(`Hotel ${id}: ${name} located in ${city}`);
}
logHotelInfo1(hotel);

function logHotelInfo2({id, name, city}) {  // object destructuring as function properties
  console.log(`Hotel ${id}: ${name} located in ${city}`);
}
logHotelInfo2(hotel);