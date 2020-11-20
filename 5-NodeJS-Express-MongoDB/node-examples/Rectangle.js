// module.exports.perimeter = (x, y) => 2 * (x + y);
// module.exports.area = (x, y) => x * y;


const rect = (x, y, callback) => {   // using ES6 export format
  if (x <= 0 || y <= 0) {
    callback(new Error(`Rectangle dimensions must be greater than zero.  Received: ${x}, ${y}`));
  } else {
    setTimeout( 
      () => callback(null, {
        perimeter: () => 2 * (x + y),
        area: () => x * y
      }),
      2000
    );
  }
}

module.exports = rect;    // CommonJS Node export format