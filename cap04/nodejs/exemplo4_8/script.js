const prompt = require('prompt-sync')();
console.log('----- Farmácia Node -----');
const totalCompra = Number(prompt('Insira o valor total da compra: '));
const parcelas1 = Math.floor(totalCompra / 20);
const parcelas2 = parcelas1 == 0 ? 1 : parcelas1 > 6 ? 6 : parcelas1;
const valorParcela = totalCompra / parcelas2;
console.log(`Pode pagar um ${parcelas2}x de R$${valorParcela.toFixed(2)}`);
