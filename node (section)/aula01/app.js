//Importing
//require('file_name') function returns the module.exports from the 'file_name'

console.log(require('./module1')); // { add: [Function: add], subtract: [Function: subtract] }
//We can use a variable to hold that information
// const add = require('./module1').add;
// const subtract = require('./module1').subtract;

//Or we can use destructuring 
const { add, subtract } = require('./module1');

console.log(add(5, 2)); //outputs: 7
console.log(subtract(5, 2)); //outputs: 3


// const module1 = require('./module1');

// console.log(module1);

// console.log(module1.add(5, 5)); // 10
// console.log('User name is ' + module1.name, module1.surname);