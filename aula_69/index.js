//Converting a normal Object into a Map Object:

const carObj = [
    {name: 'Ferrari', price: 'A lot of dollars'},
    {name: 'Mercedes', price: 'A lot of dolllars'}
];
const carMap = new Map();

console.log(carMap); //Map(0) {}

for (const car of carObj) {
    carMap.set(carObj.indexOf(car), { ...car });
}

console.log(carMap);


console.log();