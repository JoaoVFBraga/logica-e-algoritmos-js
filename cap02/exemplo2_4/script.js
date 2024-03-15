const formulario = document.querySelector('.formulario');
const valorTotal = document.querySelector('#valor-total');

formulario.addEventListener('submit', (e) => {
    const precoQuilo = Number(formulario.inPreco.value);
    const consumoCliente = Number(formulario.inConsumo.value);
    const grToKg = consumoCliente / 1000;
    const valorFinal = precoQuilo * grToKg;
    valorTotal.innerText = `Valor a pagar R$: ${valorFinal.toFixed(2)}`;
    e.preventDefault();
})