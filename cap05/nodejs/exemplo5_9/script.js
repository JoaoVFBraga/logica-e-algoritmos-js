const prompt = require('prompt-sync')();
console.log('----- Programa Etiquetas -----');
const nomeProduto = prompt('Digite o nome do produto: ');
const etiquetas = Number(prompt('Digite o número de etiquetas: '));
for(let i = 1; i <= etiquetas / 2; i++){
    console.log(`${nomeProduto.padEnd(10)}${nomeProduto.padEnd(10)}`);
}
if (etiquetas % 2 == 1) {
    console.log(`${nomeProduto}`);
}