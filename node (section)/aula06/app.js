const express = require('express');
const app = express();

app.get('/users/:userId?', (req, res) => {
    const userId = req.params.userId || 'No User ID provided';
    res.send(`User ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    res.send(`Search results for: ${searchTerm}`);
});


app.listen(3000);