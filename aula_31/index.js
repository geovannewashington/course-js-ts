/*Javascript - Destructuring and Assignment*/

//DEFINITION: It's an expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//Example
let a, b, rest;
numbers = [1, 2];
[a, b, ...rest] = numbers;

console.log(a);
//Expected Output: 1

console.log(b);
//Expected Output: 2

console.log(rest);
//Expected Output: an empty array

//Another example:
const person = {
    name: 'John',
    age: 30
};

const {name: blabla, age} = person;

console.log(blabla);
//Expected Output: John

console.log(age);
//Expected Output: 30