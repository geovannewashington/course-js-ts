const car = {
    model: 'A5',
    brand: 'Audi',
    year: 2023
};

console.log(Object.values(car));
//Returns an array containing the values of each object's key
//Outputs: [ 'A5', 'Audi', 2023 ]

console.log(Object.entries(car));
//Returns an array containing inner arrays with each key an it's value
//Outputs: [ [ 'model', 'A5' ], [ 'brand', 'Audi' ], [ 'year', 2023 ] ]

console.log(Object.getOwnPropertyDescriptor(car, 'brand'));
//Returns an objects with all the properties of a given object key, in this case 'brand'
//Outputs: { value: 'Audi', writable: true, enumerable: true, configurable: true }

let myObj1 = {};
// myObj1 = { ...car };
// myObj1.brand = 'BMW';
// console.log(myObj1); 
// console.log(car);
Object.assign(myObj1, car);
myObj1.brand = 'BMW';

console.log(myObj1);
