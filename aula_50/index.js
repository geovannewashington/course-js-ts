// //Generator Functions
// function* generator(i) {
//     yield i;
//     yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value); 
// //Expected Output: 10

// console.log(gen.next().value);
// //Expected Output: 20

//SYNTAX:
/*
    function* name(param0, param1, ... paramN) {
        statements
    } 
*/

//Another Example:
function* idMarker() {
    let index = 0;
    
    while (true) {
        yield index++;
    }
}

const gen = idMarker();

console.log(gen.next().value); //0
console.log(gen.next().value); //1
console.log(gen.next().value); //2
