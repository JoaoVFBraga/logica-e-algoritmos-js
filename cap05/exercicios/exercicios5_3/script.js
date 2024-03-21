const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');

form.addEventListener('submit', (e) => {
    const numero = Number(form.inNumero.value);
    let divisores = '';
    let soma = 0;
    for(let i = 1; i < numero; i++){
        if (numero % i == 0) {
            divisores += `${i}, `;
            soma = soma + i;
        }
    }
    linha1.innerText = `Divisores do ${numero}: ${divisores}(Soma: ${soma})`;
    if (soma == numero) {
        linha2.innerText = `${numero} é um número primo`;
    } else {
        linha2.innerText = `${numero} não é um número primo`;
    }
    e.preventDefault();
})
