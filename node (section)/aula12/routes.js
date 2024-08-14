import express from 'express';

import { initialPage, handlePost} from './src/controllers/homeController.js';
const route = express.Router();

function myMiddleware(req, res, next) {
    req.session = { name: 'John', 'surname': 'taron' };
    console.log('');
    console.log('I have passed your middleware');
    console.log('');
    next();
}

route.get('/', myMiddleware, initialPage, (req, res) => {
    console.log('I still here...');
    console.log(`'from lastMiddleware': we still have req.session.name: ${req.session.name}`);
});
route.post('/', handlePost);

export default route;