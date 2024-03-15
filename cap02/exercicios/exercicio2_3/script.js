const formulario = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');
const linha2 = document.querySelector('#linha2');

formulario.addEventListener('submit', (e) => {
    const nomeProduto = formulario.inProduto.value;
    const preco = Number(formulario.inPreco.value);
    const precoFinal = (preco * 3) - preco / 2;
    linha1.innerText = `${nomeProduto} - Promoção: Leve 3 por R$${precoFinal}`;
    linha2.innerText = `O terceiro produto custa apenas R$${preco / 2}`;
    e.preventDefault();
})
