import express from 'express';
const app = express();
import routes from './routes.js';
import path from 'path';


app.use(routes);

app.set('views', path.resolve('src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve('public')));

app.listen(3000, () => { console.log(`Running at PORT: 3000`) });