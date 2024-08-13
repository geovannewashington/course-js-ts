export function initialPage(req, res) {
    res.render('index');
};

export function handlePost(req, res) {
    res.send('Form received successfully 😁️');
};
