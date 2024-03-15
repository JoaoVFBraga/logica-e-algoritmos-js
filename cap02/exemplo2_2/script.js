const exibirResultado = document.querySelector('#exibir-resultado');
const formulario = document.querySelector('#formFilme');

formulario.addEventListener('submit', (form) => {
    const titulo = formulario.inTitulo.value;
    const duracao = Number(formulario.inDuracao.value);
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;
    exibirResultado.innerHTML = `O filme ${titulo} possui ${horas} hora(s) e ${minutos} minuto(s) de duração.`;
    form.preventDefault();
})

