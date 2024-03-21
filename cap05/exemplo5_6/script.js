const prompt = require('prompt-sync')();
console.log('----- Programa números primos -----');
const numero = Number(prompt('Digite um número: '));
let divisores = 0;
for (let i = 1; i <= numero; i++){
    if (numero % i == 0) {
        divisores++;
    }
}
if (divisores == 2) {
    console.log(`${numero} é primo`);
} else {
    console.log(`${numero} não é primo`);
}