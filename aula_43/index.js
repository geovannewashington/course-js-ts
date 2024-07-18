/*
    Defining Functions ->
    A function definition also called a function declaration or function statement consists of the 
    'function' keyword followed by:
    -The name of the function
    -A list of parameters to the function, enclosed in parentheses and separated by commas.

    SYNTAX:
    function functionName(parameter1, parameter2, [...] parameterN) {
        Function body enclosed by curly braces
    }
*/

// function square(number) {
//     return number * number;
// }

/*
 * When you pass an object as a parameter, if the function changes the object's properties, that 
 * change is visible outside the function as shown in the following example:
*/

// function myFunc(theObject) {
//     theObject.make = 'Toyota';
// }

// const myCar = {
//     make : 'Honda',
//     model : 'Accord',
//     year : 1998,
// };

// console.log(myCar.make); //Outputs: 'Honda'
// myFunc(myCar);
// console.log(myCar.make); //Outputs: 'Toyota'

//The exact same thing happens with arrays, example:

// function myFunc(theArr) {
//     theArr[0] = 30;
// }

// const arr = [45];

// console.log(arr[0]); //Outputs: 45
// myFunc(arr);
// console.log(arr[0]); //Outputs: 30

//Function Expressions:

/*
    Function Expressions can be anonnymous (it does not have a name)
    const square = function (number) {
        return number * number;
    }

    console.log(square(4)); //Outputs: 16

    However, a name can be provided with a function expression. This allows the functions to 
    refer to itself
*/

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n -1);
};

console.log(factorial(3));

//In JavaScript a function can be defined based on a condition, For example, the following 
//function definition defines myFunc only if num equals 0:

let myFunc;

if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = 'Toyota';
    };
}