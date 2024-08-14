export function initialPage(req, res, next) {
    console.log('Client received page');
    res.render('index');
    console.log(`'from initialPage': we still have req.session.name: ${req.session.name}`);
    next();
};

export function handlePost(req, res) {
    res.send('Form received successfully 😁️');
};
