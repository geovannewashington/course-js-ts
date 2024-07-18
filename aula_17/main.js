/*Introduction to Functions*/
/*Syntax:
 *  function name(parameter1, parameter2, ...){
 *      //code to be executed 
 *      //function's body
 *  }
 */
//Inside the function, the parameter behave as local variables
//Example:
function square(number){
    return number * number;
}
square(5); //Expected output: 25

/*When the compiler reaches the return statment, the function will stop executing*/
//Example:
function squareRoot(number){
    return number ** 0.5;
    console.log('Hello, World!'); 
}
squareRoot(25); //Does not display the 'Hello, World!' cool menssage

/*Local variabels (scope)*/
//Variables declared within functions, become LOCAL to the function
//Example:
function myFunction(){
    let carName = 'BMW';
    //code can see carName variable only HERE! inside this function.
}
//console.log(carName); //Outputs an error: carName is not defined

/*Anonymous functions (Does not have a name)*/
//We can create anonymous functions diffent ways, example:
let hello = function(){
    return 'Hello, World!';
}

//Using Arrow Functions
hello = () => {
    return 'Hello, World!';
}
//It gets shorter!

hello = () => 'Hello World!';
console.log(hello()); //Calling the function -> outputs: Hello World!