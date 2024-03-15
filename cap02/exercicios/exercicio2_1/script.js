const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');

form.addEventListener('submit', (e) => {
    const nomeMedicamento = form.nomeMedicamento.value;
    const precoMedicamento = Number(form.precoMedicamento.value);
    const precoFinal = Math.floor(precoMedicamento * 2);
    linha1.innerText = `Promoção de ${nomeMedicamento}`;
    linha2.innerText = `Leve 2 por apenas R$: ${precoFinal}`;
    e.preventDefault();
})