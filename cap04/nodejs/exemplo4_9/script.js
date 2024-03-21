const prompt = require('prompt-sync')();
const numero = Number(prompt('Informe um número: '));
if (numero < 100 || numero >= 1000) {
    console.log('Ops... Por favor, informe uma centena.')
} else {
    const centena = Math.floor(numero / 100);
    let sobra = numero % 100;
    const dezena = Math.floor(sobra / 10);
    sobra = sobra % 10;
    console.log(`Número invertido: ${sobra}${dezena}${centena}`);
}