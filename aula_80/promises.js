//However, callback functions are not commonly used anymore since ES6.
//Instead, JavaScript has introduced more modern and often more convenient ways to handle 
//Asynchrounous operations, (promises and async/await)

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

//Using the promise
fetchData()
    .then((data) => {
        console.log('processing data:', data);
    })
    .catch((error) => {
        console.log('An error occurred', error);
    });