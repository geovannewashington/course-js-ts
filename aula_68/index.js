//new Map();
//Purpose: Creates a new Map object that holds key-values pairs. 

let map1 = new Map();
map1.set('key1', 'value1');
map1.set('key2', 'value2');

//console.log(map1.get('key1')); // 'value1'
//console.log(map1.size);        // 2

const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
//     //console.log(`pessoa in at the index ${pessoas.indexOf(pessoa)}`);
// }

// console.log(novasPessoas);

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas.values()) {
    console.log(pessoas);
}

let { name, age } = { name: 'Alice', age: 30 };
console.log(name); // 'Alice'
console.log(age); // 30
