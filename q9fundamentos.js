
// 9) Soma dos tamanhos das palavras em uma frase
function somaTamanhos(frase) {
    return frase.split(' ').reduce((soma, palavra) => soma + palavra.length, 0);
}
console.log("Soma dos tamanhos:", somaTamanhos("Exemplo de frase para teste"));

