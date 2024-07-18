/*Short-circuit evaluation */
/**
 * Consider the pseudocode bellow:
 * (some falsy expression) && expr
 * The expr part is never evaluated because the first operand (some falsy expression) is evaluated as falsy.
 * If the expr is a function, the function is never called
 * Example:
 */

function A() {
    console.log("called A");
    return false;
}

function B() {
    console.log("called B");
    return true;
}

console.log(A() && B()); //Logs "called A" due to the call for function A
                         //the AND short-circuits here and ignores the function B

//Another example now using the OR operator (||)
console.log(B() || A()); //Logs "called B" due to the call for function B
                         //then logs true (which is the resulting value of the operator)