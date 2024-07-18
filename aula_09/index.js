/*JAVASCRIPT DATA TYPES - JavaScript has dynamic values*/
//example:
let x;      //Now x is undefined
x = 5;      //Now x is a Number
x = "John"; //Now x is a String

/*Note: When adding a number and a string, JavaScript will treat the number as a string*/
const myVariable = 16 + "Volvo"; //outputs 16volvo
/*To Javascript this is the same as: let myVariable = "16" + "Volvo";*/

/*But notice that Javascript evaluates expressions from left to right, therefore:*/
const myOtherVariable = 16 + 4 + "Volvo"; //outputs 20Volvo
/*Javascript treats 16 and 4 as numbers, until it reaches "Volvo"*/

/*JAVASCRIPT STRINGS*/
/*A string is a series of characters like "John Doe", example:*/
const myString = "John Doe";

/*JAVASCRIPT NUMBERS*/
/*All javascript numbers are stored as decimal numbers (floating point)*/
/*Numbers can be written with, or without decimals, example:*/
let x1 = 34.00; //outputs 34
let x2 = 34;    //outputs 34 as well

// Exponencial Notation
/*Extra large or Extra small numbers can be written with scientific notation, example:*/
const largeNumber = 123e5;  //the same as: 123x10^5  = 12300000
const smallNumber = 123e-5; //the same as: 123x10^-5 = 0.00123 

/*JAVASCRIPT BigInt*/
/*New datatype added in ES2020, that can be used to store integers numbers that are too big*/
//To create append n to the end of an integer number or call BigInt(), example:
const myBigInt = 12345678901234567890n;
const myOtherBigInt = BigInt("12345678901234567890"); //you have to use quotes in order to be more precise
/*Note: You cannot perform math between a BigInt type and a Number type, example:*/

const a = BigInt("5"); //BigInt TYPE
const b = 5;           //Number TYPE
//console.log(a + b);  //Outputs an error

/*JAVASCRIPT BOOLEANS*/
/*Can only have two values: True or False, example:*/
let z  = 5;
let z0 = 5;
let z1 = 6;
(z == z0); //outputs True
(z == z1); //outputs False;

/*JAVASCRIPT UNDEFINED*/
/*In javascript a variable without a value, has the value undefined*/
/*And the type is also undefined, example:*/
let car; //value is undefined, type is undefined

/*Typeof Operator, It's used to find the type of a javascript variable, example:*/
(typeof "")     //Returns String
(typeof "John") //Returns String

