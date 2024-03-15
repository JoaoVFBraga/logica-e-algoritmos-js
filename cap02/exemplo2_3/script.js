const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');
const linha3 = document.querySelector('#linha3');
const formulario = document.querySelector('.form');

formulario.addEventListener('submit', (event) => {
    const nomeVeiculo = formulario.inVeiculo.value;
    const precoVeiculo = Number(formulario.inPreco.value);
    const preco50 = precoVeiculo / 2;
    const parcela = (precoVeiculo / 2) / 12;
    linha1.innerText = `Promoção: ${nomeVeiculo}`;
    linha2.innerText = `Entrada de R$${preco50}`;
    linha3.innerText = `+12x de R$${parcela.toFixed(2)}`;
    event.preventDefault();
})
