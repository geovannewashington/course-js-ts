const arrNumbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function verifyArr(arr) {
    let newArr = new Array();
    for (i of arr) {
        if (i > 10) {
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(verifyArr(arrNumbers));
console.log(arrNumbers);

const users = [
    {name: 'Luiz', age: 62},
    {name: 'MariA', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Letícia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47}
];

const usersWithLongNames = users.filter(usersInfo => (usersInfo.name.length >= 5));
const usersOlderThanFifty = users.filter(usersInfo => (usersInfo.age > 50));
const usersLastCharA = users.filter(usersInfo => (usersInfo.name.toLowerCase().endsWith('a')));

console.log(usersWithLongNames);
console.log(usersOlderThanFifty);
console.log(usersLastCharA);
