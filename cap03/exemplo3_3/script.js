const prompt = require('prompt-sync')();
const salarioFuncionario = Number(prompt('Digite o salário do funcionário: '));
const tempoFuncionario = Number(prompt('Digite o tempo em anos que o funcionário trabalha na empresa: '));
const quadrienios = Math.floor(tempoFuncionario / 4);
console.log(`Salário: R$${salarioFuncionario}`); 
console.log(`Tempo (anos): ${tempoFuncionario}`); 
console.log(`Quadriênios: ${quadrienios}`); 
console.log(`Salário final: R$${((quadrienios * 0.01) + 1) * salarioFuncionario}`); 