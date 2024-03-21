const prompt = require('prompt-sync')();
const valor = Number(prompt('Digite o valor total: '));
const parcelas = Number(prompt('Digite em quantas vezes deseja parcelar:'));
const valorParcelas = Math.floor(valor / parcelas);
const parcelaFinal = valorParcelas + (valor % valorParcelas);
for(let i = 1; i < parcelas; i++){
    console.log(`${i} parcela: R$${valorParcelas.toFixed(2)}`);
}
console.log(`${parcelas} parcela: R$${parcelaFinal.toFixed(2)}`);