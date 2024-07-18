/*Else...If statment in Javascript*/
/**
 * Syntax:
 * if (condition1) {
 *      //block of code to be executed in case condition1 is true
 * } else if (condition2) {
 *      //block of code to be executed in case condition1 wasn't true and condition2 is true
 * } else {
 *      //block of code to be executed in case all of the previous conditions are not true
 * }
 */
//Example:

/*
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'positive'; 
    } else {
        result = 'NOT positive';
    }
    return result;
}
*/

//console.log(testNum(-5)); //Expected Output: Not positive

//We could also do it like this:

function testNum(a) {
    if (a > 0) {
        return 'positive';
    }
    return 'NOT positive';
}

let result = testNum(25);

console.log(result); //Expected Output: positive


