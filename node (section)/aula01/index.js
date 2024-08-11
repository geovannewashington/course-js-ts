const { add, subtract } = require('./module1');

const num1 = Number(window.prompt('insert value 1'));
const num2 = Number(window.prompt('insert value 2'));

console.log(add(num1 + num2), subtract(num1, num2));