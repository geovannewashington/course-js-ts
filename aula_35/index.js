/*JS -> the for...of loop*/
//It's a handy way to iterate over iterable objects such as arrays, strings, maps, sets, etc...

//SYNTAX:
/*
    for (variable of iterable) {
        //code block to be executed
    }
    *variable: Represents a variable that will be assigned the value of each element in the 
    iterable for each interation
    
    *iterable: refers to the iterable object (like an array, string, etc.) over which you want 
    to iterate
*/

const numbers = [
    1, 2, 3, 4, 5
];

for (let index of numbers) {
    console.log(index);
}

//another example iterating over a string
const string = "Hello";

for (let char of string) {
    console.log(char);
}