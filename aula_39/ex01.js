function getMax(a, b) {
    //ternary operator
    return a > b ? a : b;
}

const getMaxArrow = (a, b) => a > b ? a : b;  

console.log(getMax(5, 2));        //Expected Output: 5
console.log(getMax(10, 135));     //Expected Output: 135
console.log(getMaxArrow(0.5, 1)); //Expected Output: 1