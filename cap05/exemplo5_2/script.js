const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

form.addEventListener('submit', (e) => {
    const numeroEscolhido = Number(form.inNumero.value);
    let lista = '';
    for (let i = numeroEscolhido; i > 1; i--) {
        lista += `${i}, `;
    }
    lista += `1.`
    linha1.innerText = `Entre ${numeroEscolhido} e 1: ${lista}`;
    e.preventDefault();
})