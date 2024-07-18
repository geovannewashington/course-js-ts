// The Main Difference Between var and let variables:

// We can redeclare the variable with var
var varVariable = "John";
var varVariable = "Lennon";
console.log(varVariable); //outputs Lennon
/*OBS: We are not going to use var anymore*/

// We cannot do it with "let" variables
/*
Outputs an error:

let letVariable = "Paul";
let letVariable = "McCartney";
*/ 

// To reassign let, we do:
let letVariable = "Paul";
letVariable = "McCartney";
console.log(letVariable); //outputs McCartney