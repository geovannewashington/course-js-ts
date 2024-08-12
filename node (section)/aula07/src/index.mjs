import express from 'express'; //ES6 Modules (ESM)
// const express = require('express'); //CommonJS module system
// console.log(typeof express); //function
const app = express();
import routes from './routes.mjs';

app.use(express.urlencoded( {extended: true} )); //revise
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
