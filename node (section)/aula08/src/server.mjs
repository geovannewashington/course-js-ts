//Route Parameters

import express from 'express';
const app = express();

const mockUsers = [
    { id:1, username: "ansom", displayName: "Ansom" },
    { id:2, username: "jack", displayName: "Jack" },
    { id:3, username: "adam", displayName: "Adam" },
];

app.get('/api/user/:id', (request, response) => {
    const parsedId = parseInt(request.params.id);
    if (isNaN(parsedId)) return response.status(400).send({msg: "Bad Request. Invalid ID."});

    const findUser = mockUsers.find((user) => user.id === parsedId);
    if (!findUser) return response.status(404).send({msg: 'User not found: Error: 404'});
    return response.send(findUser);
});

app.listen(3000, () => { console.log(`Running on Port: ${3000}`) })