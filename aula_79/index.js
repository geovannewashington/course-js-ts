function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('error message');
                return;
            }

            resolve(msg.toUpperCase());
            return;
        }, timer)
    });
}

async function executes() {
    try {
        const fase1 = await wait('fase 1', rand());
        console.log(fase1);

        const fase2 = await wait('fase 2', rand());
        console.log(fase2);

        const fase3 = await wait('fase 3', rand());
        console.log(fase3);

        console.log('finished in:', fase3);

    } catch(e) {
        console.log(e);
    }
}

executes();