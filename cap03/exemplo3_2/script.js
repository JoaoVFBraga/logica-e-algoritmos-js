const prompt = require('prompt-sync')();
const nomeVeiculo = prompt('Digite o nome do veículo: ');
const valorVeiculo = Number(prompt('Digite o valor do veículo: '));
console.log(`Promoção: ${nomeVeiculo}`);
console.log(`Entrada de R$ ${valorVeiculo / 2}`);
console.log(`+12x de R$ ${((valorVeiculo / 2) / 12).toFixed(2)}`);