const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');
const linha3 = document.querySelector('#linha3');
let contador = 0;
let acumulador = 0;
form.addEventListener('submit', (e) => {
    const descricao = form.inDesc.value;
    const valor = Number(form.inValor.value);
    let contasRegistradas = `${descricao} - R$${valor} \n`;
    linha1.innerText += contasRegistradas;
    linha2.innerText = `---------------------`;
    contador++;
    acumulador += valor;
    linha3.innerText = `${contador} conta(s) - Total R$${acumulador.toFixed(2)}`;
    form.inDesc.value = '';
    form.inValor.value = '';
    form.inDesc.focus();
    e.preventDefault();
})
