/*Javascript Assignment Operators*/
/*The += operator -> adds a value to an existing variable, example:*/
let x = 10;
x += 5; //outputs 15
/*JS see this the same as: x = x + 5;*/
//Another interesting example, this time with strings, example:
let text = "Hello";
text += ", World"; //outputs Hello, World!

/*The -= operator -> subtracts a value from an existing variable, example:*/
let y = 10;
y -= 5; //outputs 5, since 10 - 5 is equal 5
/*JS see this is the same as: y = y - 5*/

/*The *= Operator -> Multiplies an existing variable, example:*/
let z = 10;
z *= 5; //outputs 50, since 10 * 5 is equal 50
/*JS see this the same as: z = z * 5*/

/*The **= operator -> The exponencial Assignment Operator raises a variable to the power
of the operand, example:*/
let a = 10;
a **= 5; //outputs 100000, since 10**5 = 10^(5) = 100000
/*JS see this the same as: a = a ** 5*/

/*The /= Operator -> Divides an existing variable, example:*/
let b = 10;
b /= 5; //outputs 2, since 10 / 5 is equal 2
/*JS see this the same as: b = b / 5*/

/*The %= Operator -> Assigns a remainder to a variable, example:*/
let c = 10;
c %= 5; // c is now 0, since the remainder of 10/5 is 0 
/*JS see this the same as: c = c % 5 = 10 % 5*/

/*How to convert numbers inside strings into real Number type*/
//1- Method, example:
const myNumber = parseInt("5"); //Now myNumber has the Number type
/*The issue here is, it only converts the integer part, therefore:*/
const mySecondNumber = parseInt("5.20"); //This will not display 5.20, but 5
/*To solve that we use the second method*/

//2- Method, parseFloat(), example:
const myThirdNumber = parseFloat("5.20"); //Outputs 5.2

//3- Method, Number(); it's a more MODERN way
/*In this case it doesn't matter if the number has decimals or not*/
const myNum = Number("50.123"); //outputs 50.123
console.log(myNum);

/*NOTE: This is very important when working with user's input*/