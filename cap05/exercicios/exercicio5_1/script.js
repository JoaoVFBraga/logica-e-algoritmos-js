const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

form.addEventListener('submit', (e) => {
    const fruta = form.inFruta.value;
    const numero = Number(form.inNumero.value);
    let saidaTexto = '';
    for(let i = 1; i < numero; i++){
        saidaTexto += `${fruta} * `
    }
    saidaTexto += `${fruta}`;
    linha1.innerText = `${saidaTexto}`;
    e.preventDefault();
})