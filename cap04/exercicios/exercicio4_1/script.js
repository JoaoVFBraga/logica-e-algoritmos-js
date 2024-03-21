const prompt = require('prompt-sync')();
console.log('----- Par ou Ímpar -----');
const numero = Number(prompt('Digite um número: '));
if ((numero % 2) == 0) {
    console.log('O número é par!');
} else {
    console.log('O número é ímpar!');
}
// let resposta;
// const valor = (numero % 2) == 0 ? resposta = 'É par!' : resposta = 'É ímpar';
// console.log(resposta);