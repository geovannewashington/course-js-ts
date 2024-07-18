/*Resolvendo Exercício*/
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

/*const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;*/

//Another way of doing it
[varA, varB, varC] = [varB, varC, varA] 

console.log(varA, varB, varC);