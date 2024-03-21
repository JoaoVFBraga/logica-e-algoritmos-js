const prompt = require('prompt-sync')();
console.log('----- Pesqueiro Node -----');
const numeroPessoas = Number(prompt('Informe o número de pessoas: '));
const numeroPeixes = Number(prompt('Informe o número de peixes obtidos: '));
const valorPessoas = numeroPessoas * 20.00
let peixesAdicionais;
if (numeroPeixes > numeroPessoas) {
    peixesAdicionais = (numeroPeixes - numeroPessoas) * 12.00;
} else {
    peixesAdicionais = 0;
}
console.log(`Número de pessoas: ${numeroPessoas}`);
console.log(`Número de peixes: ${numeroPeixes}`);
console.log(`Total a pagar: ${(valorPessoas + peixesAdicionais).toFixed(2)}`);
