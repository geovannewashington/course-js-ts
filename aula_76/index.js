//A Promise is a JavaScript object used for managing asynchrounous operations.

const myPromise =  new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber < 0.5) {
            resolve('Data has been successfully retrieved.');
        } else {
            reject('An error ocurred while fetching data.');
        }
    }, 1000);
});

/* We've added a logic to randomly either resolve the Promise with a success message 
or reject it with an error message. */

//console.log(typeof myPromise); returns 'object'

myPromise
    //We use the 'then' method to handle the successful resolution and print the sucess message.
    .then((data) => {
            console.log(data);
        })
    /* We use the 'catch' method to handle any erros and print the 
    error message if the Promise is rejectd */
    .catch((error) => {
        console.log(error);
    });

function wait(msg, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('error message');
                return;
            }

            resolve(msg.toUpperCase() + ' - there we go.');
            return;
        }, timer)
    });
}

const promises = [
    'first value',
    wait('promise 1', 3000),
    wait('promise 2', 500),
    wait('promise 3', 1000),
    'another value'
];

Promise.all(promises)
    .then(resolution => {
        console.log(resolution);
    })
    .catch(error => {
        console.log(error);
    });