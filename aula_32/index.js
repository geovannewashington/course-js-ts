/*Javascript For Loop*/
/*
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated 
by semicolons, followed by a statement, usually a block statement to be executed in the loop.
*/
//Code Demo:
let str = '';

for (let i = 0; i < 9; i++) {
    str += `\n${i}`;
}

console.log(str); 
//Expected output: 
/*  0
    1
    2
    3
    4
    5
    6
    7
    8
*/

//
function myScope() {
    for (let someVariable = 0; ;) {
        break;
    }
    // console.log(someVariable); //Expected output: someVariable is not defined
    
    //Because var are function-scoped variables, line 48 would cause an error
    //However unlike let, it's availabe outside the for loop scope, that's the reason why line 38 works fine
    for (var someVariableAgain = 25; ;) {
        break;
    }
    console.log(someVariableAgain); //Expected output: 25 

    //But when you completly ommits the keyword (var, let or const) it's treated as a global variable
    for (globalVariable = "I'm a global variable"; ;) {
        break;
    }
}

myScope();

// console.log(someVariableAgain); //Expected output: someVariableAgain is not defined

console.log(globalVariable); // "I'm a global variable"

//The Condition is an expression to be evaluated before each loop interation. If this expressions evaluates to true
//The code is executed, if not, than execution exits the loop and goes to the first statment after the for construct

//NOTE: The condition test is optional. If omitted, the condition always evaluates to true
//you NEED to make sure you insert a break statement in order to not create a infinite loop
for (let i = 0; ;) {
    //the condition was omitted
    console.log("I would be executed forever if it wasn't for the break");
    break;
}