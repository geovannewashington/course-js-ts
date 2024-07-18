/*Javascript (for...in loop)*/

//CODE DEMO:
const object = {
    a: '1',
    b: '2',
    c: '3'
};

for (const property in object) {
    console.log(`${property}: ${object[property]}` );
}

//SYNTAX:
/*
    for (variable in object) 
        statment...
*/

//variable: receives a string property name on each interation

for (const index in object) {
    console.log(typeof(index));
}

