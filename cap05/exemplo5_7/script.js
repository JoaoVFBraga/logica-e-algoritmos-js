const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um número: '));
let simbolos = '';
for (let i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
        simbolos += `*`;
    } else {
        simbolos += `-`
    }
}
console.log(simbolos);