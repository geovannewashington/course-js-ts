/*Javascript Logic*/
/*Logical and (&&) -> syntax: x && y
Will be true if and only if all the operands are true. Otherwise it will be false
*/
//Example:
const a = 3;
const b = -2;
//        ( true ) ( false )
console.log(a > 0 && b > 0); //Expected Output: false

/*Logical or (||) -> suntax: x || y
Is true if and only if one or more of it's operands is true
*/
//Example: 

const x = 3;
const y = -2;
//        ( true ) ( false )
console.log(x > 0 || y > 0); //Expected Output: true

/**
 * If a value can be converted to true, the value is so called truthy.
 * If a value can be converted to false, the value is so called falsy.
 * Example of expressions that can converted to false are:
 * null, NaN, 0, emptry strings ("" or '' or ``), undefined
 */

//Logical NOT (!) -> Takes true to falsity an vice versa
//Example
console.log(!(y > 0)); //Expected Output: true