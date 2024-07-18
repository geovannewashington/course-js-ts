//In Javascrip we can concatenate two arrays using several methods
//1. Using the 'concat' method.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);

console.log(concatenatedArray);
//Expected Output: [1, 2, 3, 4, 5, 6,]

//2. Using the spread operator '...'
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const concatenatedArray2 = [...array1, ...array2];
console.log(concatenatedArray2);
//Expected Output: [1, 2, 3, 4, 5, 6]