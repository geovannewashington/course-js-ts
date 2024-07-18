// function sum(a, b) {
//     console.log(a, b); //Outputs: undefined undefined
// }

// sum();

// function multiply(a, b) {
//     b = typeof b !== 'undefined' ? b : 1;
//     return a * b;
// }

// console.log(multiply(5)); //Outputs: 5

/*
    With default parameters, a manual check in the function body is no longer necessary.
    You can put 1 as the default valur for b in the function head
*/

// function multiply(a, b = 1) {
//     console.log(b); //Outputs: 1
//     return a * b;
// }

// console.log(multiply(5)); //Outputs: 5

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr) //Outputs: [2, 4, 6]