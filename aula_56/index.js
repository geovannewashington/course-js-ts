//The reduce() method.
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
//Expected Output: 10

// Return the oldest person
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 105 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 1000 },
];

const oldest = pessoas.reduce(
    function(accumulator, currentValue) {
        if (accumulator.idade > currentValue.idade) return accumulator;
        return currentValue;
    }
);

console.log(oldest);