/*More about the Math object*/
/*Math.floor(); method*/
/*This static method always rounds down and returns the largest integer less than or equal to a given number*/
//SYNTAX: Math.floor(x); -> x is a number
//EXAMPLES:
Math.floor(5.95);   //outputs 5
Math.floor(5.05);   //outputs 5
Math.floor(5);      //outputs 5
Math.floor(-5.05);  //outputs -6

/*Math.ceil(); method*/
/*Always rounds up and returns the smallest integer greater than or equal to a given number*/
//SYNTAX: Math.ceil(x); -> x is a number
//EXAMPLES:
Math.ceil(0.95);  //outputs 1
Math.ceil(4);     //outputs 4
Math.ceil(7.004); //outputs 8
Math.ceil(-7.004);//outputs -7

/*Math.round(); method*/
/*Returns the value of a number rounded to nearest integer*/
//SYNTAX: Math.round(x) -> x is a number
Math.round(5.95); //outputs 6
Math.round(5.5);  //outputs 6
Math.round(-5.95);//outputs -6

/*Math.max(); method*/
/*Returns the largest of the numbers given as input parameters or infinity if the are no parameters*/
//Examples:
Math.max();           //outputs infinity
Math.max(1, 3, 2);    //outputs 3
Math.max(-1, -3, -2); //outputs -1

/*Math.min(); method*/
/*The opposite of max, returns smallest of the numbers given*/
//Examples:
Math.min();           //outputs infinity as well
Math.min(2, 3, 1 );   //outputs 1
Math.min(-2, -3, -1); //outputs -3

/*Math.random(); method*/
/*Returns a floating-point, greater than or equal 0 and less than 1*/
/*OBS.: Do not use for anything related to security*/
//Examples:
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3)); //Expected output: 0, 1 or 2
console.log(getRandomInt(1)); //Expected output: 0
console.log(Math.random());   //Expected output: A number from 0 to <1