const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');

form.addEventListener('submit', (e) => {
    const ladoA = Number(form.inLadoA.value);
    const ladoB = Number(form.inLadoB.value);
    const ladoC = Number(form.inLadoC.value);

    if ((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
        linha1.innerText = `Os lados não podem formar um triângulo`;
    } else {
        linha1.innerText = `Os lados podem formar um triângulo`;
    }

    const tipo = (ladoA === ladoB && ladoB === ladoC) ? 'Equilátero' : (ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC) ? 'Isósceles' : 'Escaleno';

    linha2.innerText = `Tipo: ${tipo}`;

    e.preventDefault();
})