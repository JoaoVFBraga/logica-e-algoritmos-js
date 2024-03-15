const formulario = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const valor = Number(formulario.inValor.value);
    const tempo = Number(formulario.inTempo.value);
    const calculaTempo = (Math.ceil(tempo / 15) * valor);
    linha1.innerText = `Valor a pagar: R$${calculaTempo.toFixed(2)}`;
})