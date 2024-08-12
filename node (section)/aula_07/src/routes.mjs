import express from 'express';
const route = express.Router();

import contactPage from "./controllers/contactPage.mjs";
import homePage from "./controllers/homePage.mjs"

route.get('/', homePage)
route.get('/contact', contactPage);

export default route;