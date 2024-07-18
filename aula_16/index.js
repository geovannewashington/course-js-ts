/*Introduction to Javascript arrays*/
//Simple Definition: An array is a special variable, which can hold more than one value.
//Example:
const cars = ['Volvo', 'Saab', 'BMW']; //An array with three elements/items -> with car brands names.
//SYNTAX: const array_name = [item1, item2, ...];
//OBS: It's a common practice to declare arrays with the const keyword

/*Basic Array Methods*/
/*array.pop();*/
//Removes the last element from an array, example:
const yearCalendar = [2022, 2023, 2024];
yearCalendar.pop();         //Outputs 2024 -> the elements that was popped out
yearCalendar;               //the array has now ony two elements: 2022 and 2023

/*array.push();*/
//Opposite of pop, it adds a new element to an array (also at the end)
//Example: 
const students = ['John', 'Joseph', 'Julia'];
students.push('Julian'); //Returns the new array length, which is 4
(students);              //outputs the array with the four elements, including now also the student 'Julian' 

/*array.shift();*/
//Removes the first array element and shifts all other elements to a lower index
//INDEX:                 0     1     2    
const computerParts = ['cpu','gpu','psu'];
computerParts.shift(); //Returns the value that was shifted out, in this case 'cpu'
//INDEX:                            0     1
(computerParts);       //Outputs: 'gpu','psu'

/*array.unshift();*/
//Adds a new element to an array (at the beginning)
//Returns the new array length
//INDEX:         0       1       2      3
const colors = ['black','green','blue','red'];
colors.unshift('yellow'); //Adds yellow at the index 0 //Returns the new array length, in this case 5
console.log(colors);      //outputs the new array with the five elements
//INDEX:       0         1        2        3        4 
//OUTPUT:    ['yellow', 'black', 'green', 'blue' , 'red']
console.log(colors[1]);