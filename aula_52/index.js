//The splice() method in JavaScript
//It's a versatile array method that can add, remove, or replace elements in an array.
//It modifies the original array and returns and array of removed elements.

//SYNTAX:
/*
array.splice(start, deleteCount, item1, item2, ... itemN);
*/

/*
start: The index at which to start changing the array.
deleteCounter: the number of elements to remove (optional)
item1, item2, ... itemN: The elements to add to the array (optional)
*/

//Example: removing
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removedElements = myArr.splice(5, Number.MAX_VALUE);
console.log(`The following elements were removed: ${removedElements} \n original array: ${myArr}`);

//Using splice() like other array methods:
//1. push (add elements to the end of an array):
let array = [1, 2, 3];
array.splice(array.length, 0, 4, 5);
console.log(array);

//to be continued...