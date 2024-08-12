const express = require('express');
const app = express();

// console.log(typeof express); //function

//         POST    GET   PUT     DELETE
// CRUD -> CREATE, READ, UPDATE, DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="nome">
    <button>Send</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Form received');
});

app.get('/contact', (req, res) => {
    res.send('Thank you for contacting us');
});

app.listen(3000, () => {
    console.log('Acess http://localhost:3000');
});