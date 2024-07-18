//Before the ES6 update, asynchronous operations could be done with Callback Hell:

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function wait(msg, timer, callback) {
//     setTimeout(() => {
//         console.log(msg);
//         if (callback) callback();
//     }, timer);
// }

//Callback hell refers to the complex structure 
//that arises when we nest multiple callbacks inside a function.

// wait('Phrase 1', rand(1, 2), function() {
//     wait('Phrase 2', rand(1, 2), function() {
//         wait('Phrase 3', rand(1, 2));
//     });
// });

// The result code structure resembles a pyramid, which is why Callback hell is also known as the
// "pyramid of doom", it makes the code less readable and harder to maintain.

//Example using promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randonNumber = Math.random();
        console.log(randonNumber);

        if (randonNumber < 0.5) {
            resolve("Data has been successfully retrieved");
        } else {
            reject("An error ocurred while fetching data.");
        }
        // randonNumber < 0.5 ? resolve("Data has been successfully retrieved") : reject("An error ocurred while fetching data.");
    }, 1000)
});

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

function wait(msg, timer) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('The message must be a string'));

        setTimeout(() => {
            resolve(msg);
        }, timer);
    });
}

wait('Conexão com o BD', rand(1, 2))
    .then(data => {
        console.log(data);
        return wait('Buscando dados na base', rand(1, 2));
    })
    .then(data => {
        console.log(data);
        return wait(124, rand(1, 2));
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

console.log('this will be executed before anything');
