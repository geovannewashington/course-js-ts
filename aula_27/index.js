/*Javascript Date Objects*/
//By default JavaScript will use the browser's timezone and display a date as a full text string

/*Creating Date Objects*/
//Date objects are created with the new Date() constructor

const currentDate = new Date(); //NOTE: without arguments, the object will have the current time 
console.log(currentDate);

//There are 9 ways to create a new date object:
/*
new Date();
new Date(date string);

new Date(year, month);
new Date(year, month, day);
new Date(year, month, day, hour);
new Date(year, month, day, hour, minutes);
new Date(year, month, day, hour, minutes, seconds);
new Date(year, month, day, hour, minutes, seconds, ms);
NOTE: You cannot omit month. If you supply only one parameter it will be treated as milliseconds 

new Date(milliseconds);
*/

//NOTE: JavaScript counts months from 0, therefore:
const d = new Date(2018, 15, 24, 10, 33, 30);
//Is the same as:
const d2 = new Date(2019, 3, 24, 10, 33, 30);

//NOTE: One and two digit years will be interpreted as 19xx, example:
const randomYear = new Date(19, 3); 
console.log(randomYear); //Expected output for year: 1919

//Some Methods:
console.log(typeof(randomYear.toString())); //Converts into string
console.log(currentDate.toDateString()); //Converts into a more readable format

//Some Get Methods:
console.log(currentDate.getDate()); //Returns the day of the month from 1 to 31
console.log(currentDate.getDay()); //Returns the day of the week from 0 to 6
console.log(currentDate.getMonth()); //Expected Output: 3
console.log(currentDate.getFullYear()); //Expected Output: 2024
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());