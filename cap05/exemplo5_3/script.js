const prompt = require('prompt-sync')();
let numero;
let soma = 0;
let numerosPares = '';

do {
    numero = Number(prompt('Digite um número: '));
    if (numero == 0 || isNaN(numero)) {
        console.log('Digite um número maior que zero.')
    }
} while (numero == 0 || isNaN(numero));

let pares = `Pares entre 1 e ${numero}: `
for (let i = 2; i <= 20; i = i + 2) {
    pares += `${i}, `
}
console.log(pares);