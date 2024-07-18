//Se estar no modo paisagem então: largura > altura
function ehPaisagem(largura, altura) {
    return largura > altura;
}

const ehPaisagemArrow = (largura, altura) => largura > altura;

console.log(ehPaisagem(5, 25));       //false
console.log(ehPaisagemArrow(25, 10)); //true