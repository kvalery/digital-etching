console.log('------start-----')

let buffer = 'img/img.png';

// const UP = require(UPNG);
const fs = require('fs');


// console.log('------start-----', UP.decode(buffer))
console.log('------start-----', fs.readFileSync(buffer))