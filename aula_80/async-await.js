/*
Async/await, introduced in ES8 (ECMAScript 2017), provides an even more convenient and readable way 
to work with Promises. async functions return a Promise, and await is used to pause the execution of
 an async function until the Promise is resolved.
*/

function fetchData() {
    return new Promise((resolve, reject) => {
        console.log('Fetching data...');

        //Simulate an asynchronous operation with setTimeout
        setTimeout(() => {
            const data = { userId: 1, userName: 'John Doe' };
            resolve(data);
        }, 2000);
    })
}

//Usgin async/await
async function processData() {
    try {
        const data = await fetchData();
        console.log('Processing data:', data);
    } catch (error) {
        console.log('An error occurred:', error);
    }
}

processData();

console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');