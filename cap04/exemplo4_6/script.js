const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');
const linha3 = document.querySelector('#linha3');

form.addEventListener('submit', (e) => {
    const valorSaque = Number(form.inValor.value);
    if ((valorSaque % 10) === 0) {
        const notas100 = Math.floor(valorSaque / 100);
        const resto1 = notas100 * 100;
        let notas50;
        if (resto1 >= 50) {
            notas50 = Math.floor((valorSaque - resto1) / 50);
        } else {
            notas50 = 0;
        };
        const resto2 = notas50 * 50;
        let notas10;
        if (resto2 >= 10) {
            notas10 = Math.floor((valorSaque - resto1 - resto2) / 10);
        } else {
            notas10 = 0;
        }
        linha1.innerText = `Notas de R$100: ${notas100}`;
        linha2.innerText = `Notas de R$50: ${notas50}`;
        linha3.innerText = `Notas de R$10: ${notas10}`;
        // Solução do livro
        // const notasCem = Math.floor(saque / 100);
        // let resto = saque % 100;
        // const notasCinquenta = Math.floor(resto / 50);
        // resto = resto % 50;
        // const notasDez = Math.floor(resto / 10;)
    } else {
        linha1.innerText = `Infelizmente não é possível realizar o saque.`
        linha2.innerText = `No momento possuimos apenas notas de 10, 50 e 100 reais.`
    }
    e.preventDefault();
})