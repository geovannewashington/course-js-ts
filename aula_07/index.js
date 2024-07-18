/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.92...
Luiz Otáveio nasceu em 1980
*/
const personName = "Luiz Otávio";
const lastName = "Miranda";
const age = 30;
const weight = 84;
const heightInMeters = 1.80;
const currentYear = 2023;
let imc = weight / (heightInMeters ** 2);
let birthYear = (currentYear - age);
// Let's do it with TEMPLATE STRINGS
console.log(`${personName} ${lastName} tem ${age} anos pesa ${weight} kg`); 
console.log(`tem ${heightInMeters} de altura e seu IMC é de: ${imc}`);
console.log(`${personName} ${lastName} nasceu em: ${birthYear}`);

