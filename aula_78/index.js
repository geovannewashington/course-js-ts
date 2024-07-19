function wait(msg, timer) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('The message must be a string'));

        setTimeout(() => {
            return resolve(msg);
        }, timer);
    });
}

function downloadPage() {
    const inCache = true;

    if (inCache) {
        return Promise.resolve('Page in cache');
    } else {
        return wait('Page downloaded', 3000);
    }
}

downloadPage()
    .then(pageData => console.log(pageData))
    .catch(e => console.log('ERROR: ', e));

