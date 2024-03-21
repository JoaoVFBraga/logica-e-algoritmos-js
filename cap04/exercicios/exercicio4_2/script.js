const prompt = require('prompt-sync')();
const velocidadeMaxima = Number(prompt('Velocidade máxima: '));
const velocidadeCondutor  = Number(prompt('Velocidade do condutor: '));
if (velocidadeCondutor <= velocidadeMaxima) {
    console.log('Situação: Sem multas');
} else if (velocidadeCondutor <= (velocidadeMaxima * 1.2)) {
    console.log('Situação: Multa leve');
} else {
    console.log('Situação: Multa grave');
}