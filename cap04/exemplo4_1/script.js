const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');

form.addEventListener('submit', (e) => {
    const nomeAluno = form.inNome.value;
    const primeiraNota = Number(form.inNota1.value);
    const segundaNota = Number(form.inNota2.value);
    const media = (primeiraNota + segundaNota) / 2;
    linha1.innerText = `Média das notas: ${media}`;
    
    if (media >= 7) {
        linha2.innerText = `Parabéns ${nomeAluno}, Você foi aprovado`;
        linha2.classList.add('aprovado');
    } else {
        linha2.innerText = `Desculpe ${nomeAluno}, mas você foi reprovado`
        linha2.classList.add('reprovado');
    }

    e.preventDefault();
})
