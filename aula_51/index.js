//Revision of arrays in Javascript:
//Creating an Array, you can create an array in two ways:
//1. Using Array Literal Syntax:
let fruits = ["Apple", "Banana", "Cherry"];

//2. Using the Array Constructor:
//INDEX:                   0         1        2
let fruits2 = new Array("Apple", "Banana", "Cherry");

//Acessing Array Elements:
//You can acess array elements using their index (starting from zero).
console.log(fruits[0]); //Outputs: "Apple"
console.log(fruits[1]); //Outputs: "Banana"

//In Javascript, arrays are considered reference types, example
//Mutations Affect All References
//When you change the array through one variable,  it affects all variables that refecence that Arr 
//const originalArray = [1, 2, 3];
//const anotherArray = originalArray;

//anotherArray.push(4);

//console.log(originalArray); //Outputs: [1, 2, 3, 4]
//console.log(anotherArray);  //Outputs: [1, 2, 3, 4]
//In this example, both 'originalArray' and 'anotherArray' point to the same array in memory.
//Therefore, whe you modify 'anotherArray', 'orignalArray' is also affected

//Copying Arrays
//If you to create a true copy of an array, you to explicity create a new array

//Using the Spread operator:
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
copyArray.push(4);

console.log(originalArray); // Output: [1, 2, 3]
console.log(copyArray);     // Output: [1, 2, 3, 4]

//Modify Array Elements
fruits[1] = "Mango";
console.log(fruits);

//---------------------------------------------------//
// Array Properties and Methods:
// 1. length property (returns the amount of elements)
console.log(fruits.length); //Outputs 3;
//NOTE: arrayName - 1 is always going to be the last element index
console.log(fruits.length - 1); //Outputs: 2

//2. delete arrayName (deletes the element from an array while keeping the index);
const myArr = [1, 2, 3, 4];
delete myArr[1];
console.log(myArr); //Outputs: [ 1, <1 empty item>, 3, 4 ]

//3. Adding Elements:
//Using push() (add to the end)
fruits.push('Date');
console.log(fruits); //Outputs: [ 'Apple', 'Mango', 'Cherry', 'Date' ]

//Using unshift (adds to the beginning):
fruits.unshift('Elderberry');
console.log(fruits); //Outputs: [ 'Elderberry', 'Apple', 'Mango', 'Cherry', 'Date' ]

//4. Removing Elements:
//Using pop() (removes from the end)
let lastElement = fruits.pop();
console.log(fruits); //Outputs: [ 'Elderberry', 'Apple', 'Mango', 'Cherry' ]
//NOTE: it also retuns the last element which we can hold in a variable for example:
console.log(lastElement); //Outputs: 'Date'

//Using shift(); (removes from the beginning)
let firstElement = fruits.shift();
console.log(fruits); //Outputs: [ 'Apple', 'Mango', 'Cherry' ]
console.log(firstElement); //Outputs: 'Elderberry'