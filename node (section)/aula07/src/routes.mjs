import express from 'express';
const route = express.Router();

import contactPage from "./controllers/contactPage.mjs";
import homePage from "./controllers/homePage.mjs";
import users from "./controllers/users.mjs";

route.get('/', homePage)
route.get('/contact', contactPage);
route.get('/api/users', users);

export default route;