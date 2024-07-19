function sleep(time, value, stage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stage === 'fulfill') {
                return resolve(value);
            } else {
                return reject(new Error(value));
            }
        }, time);
    });
}

const p1 = sleep(500, 'one', 'fulfill');
const p2 = sleep(100, 'two', 'fulfill');

Promise.race([p1, p2]).then(value => {
    console.log(value);
    //Both fulfill, but p2 is faster
});

const p3 = sleep(100, 'three', 'fulfill');
const p4 = sleep(500, 'four', 'reject');

Promise.race([p3, p4]).then(
    (value) => {
        console.log(value); // 'three'
        //p3 is faster, so it fulfills
    },
    (error) => {
        //not called
    },
)

const p5 = sleep(500, 'five', 'fulfill');
const p6 = sleep(100, 'six', 'reject');

Promise.race([p5, p6]).then(
    (value) => {
        //not called
    },
    (error) => {
        console.error(error.message); // 'six'
        // p6 is faster, so its rejects
    },
);