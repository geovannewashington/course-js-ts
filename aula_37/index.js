//JavaScrip -> while & do-while

/*
while statement creates a loop that executes a specified statement (block of code) 
as long as the condition evaluates to true. the condition is evaluated before 
executing the statement
*/

//EXAMPLE:
let n = 0;

while (n < 3) {
    n++;
}

console.log(n); //outputs: 3

/*
do...while is similar with the difference that the test condition is evaluated
after executing the statement (block of code) resulting it to be executed at least 
once
*/

//EXAMPLE

let k = 0;

do {
    console.log('hi!');
} while (k === null)