//JavaScript Objects: 
//1 - Acessing Object's keys:
// dot notation:
const person = {name: 'john', age: 28};
console.log(person.name);    //Outputs: 'john'
//bracket notation:
console.log(person['name']); //Outputs: 'john'
//OBS: bracket notation is useful in the following scenario: 
//Dynamic property acess: when the property name is not known beforehand
//bracket notation allows you to acess the property using a variable or expression
//Example:
const propName = 'name';
console.log(person[propName]); //Outputs: 'john'

//2 - Constructor Function vs Factory Function:
//Constructor function 
//. used with the 'new' keyword
//Example:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Erick', 30);
console.log(person1);

//Factory Function
//. simply returns an object 
//. no need for the 'new' keyword

//3. Object.freeze() method
//. Prevents modification of an object
//. Existing properties are made read-only
//EXAMPLE:
function Car(model, year, brand) {
    this.model = model;
    this.year = year;
    this.brand = brand; 
    Object.freeze(this);
}

const newCar = new Car('A3', 2022, 'Audi');
newCar.brand = 'BMW';
console.log(`The ${newCar.model} was released back in ${newCar.year} by ${newCar.brand}`);
//Outputs: 'The A3 was released back in 2022 by Audi'