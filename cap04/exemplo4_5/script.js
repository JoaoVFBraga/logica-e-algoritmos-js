const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

form.addEventListener('submit', (e) => {
    const numero = Math.sqrt(Number(form.inNumero.value));
    if (Number.isInteger(numero)) {
        linha1.innerText = `Raiz: ${numero}`;
    } else {
        linha1.innerText = `Não há raiz exata para esse número`
    };
    e.preventDefault();
});