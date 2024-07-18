//JS -> The continue and break statements 
/*
the continue statemente terminates execution of the statements in the current interation of the current loop and continues 
execution of the loop with the next iteration

NOTE: in contrast wihte 'break', continue does not terminate the execution of the loop entirely
*/

//EXAMPLE:

let text = '';

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text += i;
}

console.log(text); //Expected Output: '012456789'

//break EXAMPLE:

let j = 0;

while (j < 6) {
    if (j === 3) {
        break;
    }
    j++;
}

console.log(j); //Expected Output 3