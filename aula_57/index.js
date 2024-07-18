//Filter all the even numbers
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const evenNum = numbers
    .filter((currentValue) => currentValue % 2 === 0)
    .map((currentValue) => currentValue * 2)
    .reduce((accumulator, currentValue) => accumulator += currentValue, 0);

console.log(evenNum); 