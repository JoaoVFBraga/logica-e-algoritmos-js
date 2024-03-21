const prompt = require('prompt-sync')();
console.log('--- Programa Copa do Mundo ---');
console.log('Caso deseje sair, digite 0');
do {
    const ano = Number(prompt('Digite um ano a partir de 1930: '));
    if (ano == 0) {
        break
    } else if (ano == 1946 || ano == 1942) {
        console.log(`Não houve copa em ${ano} devido a segunda guerra mundial`);
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim, ${ano} é ano de copa!`);
    } else {
        console.log(`O ano de ${ano} não é de copa.`)
    }
} while (true)
console.log('Fechando...')