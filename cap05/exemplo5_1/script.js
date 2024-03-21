const form = document.querySelector('.form');
const linha1 = document.querySelector('.linha1');

form.addEventListener('submit', (e) => {
    const numeroEscolhido = Number(form.inNumero.value);
    for(let i = 1; i <= 10; i++) {
        linha1.innerText += `${numeroEscolhido} x ${i} = ${numeroEscolhido * i} \n`;
    }
    e.preventDefault();
})