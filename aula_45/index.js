//The following example shows nested functions:
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquares(2, 3)); //Outputs: 13
console.log(addSquares(3, 4)); //Outputs: 25
console.log(addSquares(4, 5)); //Outputs: 41

//Another example:
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); 
//Think of it like: give me a function that adds 3 to whatever you git it
console.log(fnInside(5));   //Outputs 8
console.log(outside(3)(5)); //Outputs 8

