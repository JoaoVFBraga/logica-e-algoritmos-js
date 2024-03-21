const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

form.addEventListener('submit', (e) => {
    const nomeUsuario = form.inNome.value;
    const masculino = form.inSexoM.checked;
    const altura = Number(form.inAltura.value);
    
    let pesoIdeal
    if (masculino) {
        pesoIdeal = 22 * Math.pow(altura, 2);
    } else {
        pesoIdeal = 21 * Math.pow(altura, 2);
    };

    linha1.innerText = `${nomeUsuario}, seu peso ideal é ${pesoIdeal.toFixed(2)} kg`
    e.preventDefault();
})

form.addEventListener('reset', () => {
    linha1.innerText = '';
})