const prompt = require('prompt-sync')();
const pesoRacao = Number(prompt('Informe o peso da ração em Kg: '));
const consumoGato = Number(prompt('Quantas gramas o gato consome por dia? '));
console.log(`Peso da ração (Kg): ${pesoRacao}`);
console.log(`Consumo diário (gr): ${consumoGato}`);
console.log(`Duração: ${Math.floor((pesoRacao * 1000) / consumoGato)} dias`);
console.log(`Sobra: ${Math.floor((pesoRacao * 1000) % consumoGato)} gr`);