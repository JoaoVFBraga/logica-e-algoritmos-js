const prompt = require('prompt-sync')();
console.log('----- Programa Parquímetro -----');
const valorDepositado = Number(prompt('Digite o valor depositado: '));
let tempo;
let valor;
// if (valorDepositado < 1.00) {
//     console.log('Valor Insuficiente');
// } else if (valorDepositado < 1.75) {
//     tempo = 30;
//     valor = 1.00;
// } else if (valorDepositado < 3.00){
//     tempo = 60;
//     valor = 1.75;
// } else {
//     tempo = 120;
//     valor = 3.00;
// }
if (valorDepositado < 1) {
    console.log('Valor Insuficiente');
} else {
    tempo = valorDepositado < 1.75 ? 30 : valorDepositado < 3.00 ? 60 : 120;
    valor = valorDepositado < 1.75 ? 1.00 : valorDepositado < 3.00 ? 1.75 : 3.00;
}
const valorTrocado = valorDepositado - valor;
console.log(`Tempo: ${tempo}`);
console.log(`Troco: ${valorTrocado.toFixed(2)}`);
