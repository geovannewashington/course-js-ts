//The map() method of Array instances creates a new array populated with the results of calling
//provided function on every element in the calling array.

//EXAMPLE:

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);

//console.log(map1);
//Expected Output: Array [2, 8, 18, 32]

//Another Example
//Mapping an array of numbers to an array of square roots
const numbers = [1, 4, 9];
const roots = numbers.map(num => Math.sqrt(num));

//console.log(roots); //Outputs: [1, 2, 3] *obs: numbers still [1, 2, 3]

//Given an array of objects: 
const users = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//TODO:
// For each element:
// Return only the names of each person
const names = users.map(obj => obj.nome);
//console.log(names);

// Remove only the "name" key from the object
const ages = users.map(obj => ({idade: obj.idade}));
console.log(ages);

// add an id key to each object (id)
const addID = users.map(function(obj, index) {
    const newObj = { ...obj };
    newObj.id = index;
    return newObj;
});

console.log(addID);
console.log(users); //Our orignial 'users' array still the same