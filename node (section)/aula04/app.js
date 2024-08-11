const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');

const write = require('./modules/write');
const read = require('./modules/read');

const people = [
    { name: 'John' },
    { name: 'Paul' },
    { name: 'George' },
    { name: 'Ringo' },
    { name: 'Annie' }
];

const json = JSON.stringify(people, '', 2);
write(filePath, json);

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    data.forEach(el => console.log(el.name));
}

readFile(filePath);