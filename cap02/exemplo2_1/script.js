const form = document.querySelector('.formulario');
const mensagem = document.querySelector('h3');

form.addEventListener('submit', (item) => {
    const nome = form.inNome.value;
    mensagem.innerText = `Olá, ${nome}. Seja bem-vindo(a)!`
    item.preventDefault();
})
