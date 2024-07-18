const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
//Expected Output: true

//The prototype of an object is not always Object.prototype. example:
const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

// Date.prototype
// Object { }
// null