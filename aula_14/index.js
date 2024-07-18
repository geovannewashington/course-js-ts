/*More about Number() methods*/
/*Number.prototype.toString() method*/
/*This method returns a string representing the number, example:*/
const count = 7;
count.toString()   //outputs '7'
//SYNTAX: toString(radix) -> The radix parameter is an integer in the range 2 to 36
//It specifies the base, and default is 10, meaning that if we ommit it, radix = 10;
count.toString()   //outputs '7'
count.toString(10) //outputs '7' as well
count.toString(2)  //outputs '111' wich is the binary version of the number 7

/*Number.prototype.toFixed() method*/
/*Rounds the number to a specified number of decimals*/
//SYNTAX: toFixed(digits) -> The 'digits' parameter is the number of digits after the decimal point (.)
//Default is equal 0, which means no decimals, examples:
const myNumber = 25.578;
myNumber.toFixed(); //expected output: '26' 
myNumber.toFixed(2);//expected output: '25.58' 


/*Number.isInteger() method*/
/*Returns a boolean value (true or false), determines wheter the passed value is an integer (has no decimal part)*/
//SYNTAX: Number.isInteger(value); -> the value parameter is the value to be tested for being an integer
//EXAMPLE:
function fits(x, y){
    if (Number.isInteger(y / x)){
        return 'Fits!';
    }
    return 'Does NOT fit!';
}
fits(5, 10) //Expected output: 'Fits!'
fits(5,11)  //Expected output: 'Does NOT fit!'

/*Number.isNaN() method*/
/*This static method determines wheter the passed value is the number value NaN (Not a Number), returns a boolean value*/
//EXAMPLE:
Number.isNaN(NaN); //expected output: true;
Number.isNaN(37);  //expected output: false;
function circumference(radius){
    if (Number.isNaN(Number.parseFloat(radius))){
        return 0;
    }
    return parseFloat(radius) * 2.0 * Math.PI;
}
circumference('4.567abcdefgh') // Expected output: 28.695307297889173
circumference('abcdefgh')      // Expected output: 0