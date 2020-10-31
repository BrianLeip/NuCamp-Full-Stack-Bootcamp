const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  { 
    id: 0,
    name: 'guitar',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 1,
    name: 'xylophone',
    type: INSTRUMENT_TYPE_PERCUSSION
  },
  {
    id: 2,
    name: 'zither',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 3,
    name: 'bagpipes',
    type: INSTRUMENT_TYPE_WIND
  },
];

console.log("CHALLENGE 1:")
const sortItems = (objArr) => {
  let arrCopy = [...objArr];
  arrCopy.sort((a, b) => {
    return(
      a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 
      a.name.toUpperCase() == b.name.toUpperCase() ? 0 : 1
    );
  });
  return(arrCopy);
} 
console.log(sortItems(instruments));
console.log(instruments);


console.log("CHALLENGE 2:")
const getType = (objArr, type) => {
  return objArr.filter(obj => obj.type === type)
}
console.log(getType(instruments, INSTRUMENT_TYPE_STRING));


console.log("CHALLENGE 3:")
const getNames = (objArr) => {
  return( objArr.map(objArr => objArr.name) )
}
console.log(getNames(instruments));


console.log("CHALLENGE 4:")
console.log( getNames(getType(instruments, INSTRUMENT_TYPE_STRING)) );