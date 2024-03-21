const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let chinchilas = Number(form.inChin.value);
    const anos = Number(form.inAnos.value);
    let textoFinal = '';
    for(let i = 1; i <= anos; i++){
        textoFinal += `${i} ano: ${chinchilas} \n`;
        chinchilas = chinchilas * 3;
    }
    linha1.innerText = `${textoFinal}`;
});