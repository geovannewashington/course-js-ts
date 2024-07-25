//callback function is a function that is passed as 
//an argument to another function, example:

//A function that takes another function as an argument
function processUserInput(callback) {
    const name = prompt('please enter your name');
    callback(name);
}

//A callback function
function greet(name) {
    console.log('hello, ' + name);
}

//Passing the callback function to processUserInput
processUserInput(greet);

//