/*JAVASCRIPT MORE ABOUT STRINGS*/
/*To find how many characters are there in a string, use the built in length property, example:*/
let alphabet = "abcdefghijklmnopqrstuvwxyz";
(alphabet.length); //outputs 26, since there are 26 letters in the English Alphabet

//Escape characters
/*The backslash character (\) turns special characters into string characters, exmaple:*/
let text = "We are the so-called \"Vinkings\" from the north";
//another example:
text  = "first line\nsecond line" //n stands for New Line
/* OUTPUTS: 
* first line
* second line
*/

/*TEMPLATE STRINGS*/
/*Template strings allows multiline strings, example:*/
let anotherText = 
`The quick
brown fox
jumps over
the lazy dog`; 
/*Outputs the same way considering the line breaks*/

/*String.prototype.at() -> method*/
/*Returns a new string consisting on the UTF-8 code unit located at the specified offset*/
//OBS -> Negative integers count back from last string character
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
(`An index of ${index} returns the character ${sentence.at(index)}`) //outputs: "An index of 5 returns the character u"
index = -4;
(`An index of ${index} returns the character ${sentence.at(index)}`) //outputs: "An index of -4 returns the character d"

/*String.prototype.indexOf()*/
/*Returns the index of the first occurence of a string, or it retuns -1 if the string is not found*/
//EX.:
const anotherSentence = 'I love my cat';
anotherSentence.indexOf('cat') //should output 10
anotherSentence.indexOf('dog') //outputs -1, because it didn't find the substring dog

/*Omitting the value causes indexOf() to search for the string: 'undefined', example:*/
const undefinedString = '_undefined';
undefinedString.indexOf(); //Outputs 1

/*Syntax: indexOf(searchString) or indexOf(searchString, position)*/
/*indexOf() method returns the first occurence of the specified substring at a position greater than or equal to position 
which defaults to 0. If position is less than zere, the method treats it as if positon = 0, examples:*/
'hello world hello'.indexOf('o', -5) //returns 4
'hello world hello'.indexOf('world', 12) //returns -1 (not found) 
/*world occurs at index 6, that position is not greater than or equal to 12.*/

/*String.prototype.lastIndexOf() method*/
/*Returns the index of the last occurence of a substring*/
//also returns -1 if it's not located
/*it searches backwards meaning if the second parameter (positon) is 15 the search starts
a the the position 15, and searches to the beginning of the string*/
//EX.:
let myString = "Please locate where 'locate' occurs!";
myString.lastIndexOf('locate');     //returns 21
myString.lastIndexOf('locate', 15); // returns 7

/*String.protoype.slice() method*/
/*This method extracts a section of the string and returns a new string without modifying the original string*/
/*It takes two parameters -> SYNTAX: slice(indexStart, indexEnd);*/
//The final index is not included, example:
const theMirror = 'the mirror';
theMirror.slice(4, 8) //outputs mirr
/* 0123456789
 * the mirror
 *     mirr -> result
 */

/*If you ommit the second parameter the method will slice the rest of the string, example:*/
const myName = 'John Lennon'; //not true LULW
myName.slice(5) //outputs: Lennon -> the same result as: myName.slice(5, myName.length)

/*If the parameter is negative, the position is counted from the end of the string, example:*/
const str = 'The quick brown fox jumps over the lazy dog.';
str.slice(-9, -5) //Outputs: lazy

/*String.prototype.split() method*/
/*This method takes a pattern and divide this string into an 
ordered list, put these substrings into an array and returns the array*/
//EXAMPLE:

const str3 = 'The quick brown fox jumps over the lazy dog.';
const words = str3.split(' ');  
console.log(words[3]); //Expected output: "fox"

const chars = str3.split('');
console.log(chars[8]); //Expected output: "k" 

const strCopy = str.split();
console.log(strCopy); //Expected output: ["The quick brown fox jumps over the lazy dog."]