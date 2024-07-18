/*Javascrip Ternary Operator*/

//It's handy to replace simple else...if statements 

//SYNTAX: condition ? exprIfTrue : exprIfFalse

//Example:
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));  //Expected Output: $2.00
console.log(getFee(false)); //Expected Output: $10.00
console.log(getFee(null));  //Expected Output: $10.00
