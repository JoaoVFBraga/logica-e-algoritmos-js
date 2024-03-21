const prompt = require('prompt-sync')();
const num1 = Number(prompt('Digite um número: '));
const num2 = Number(prompt('Digite outro número: '));
const soma = num1 + num2;
console.log(`A soma dos dois números é: ${soma}`);