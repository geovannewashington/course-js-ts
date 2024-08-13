import express from 'express';

import { initialPage, handlePost} from './src/controllers/homeController.mjs';
const route = express.Router();

route.get('/', initialPage);
route.post('/', handlePost);

export default route;