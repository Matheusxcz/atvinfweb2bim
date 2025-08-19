
// 5) Maior palavra em uma frase
function maiorPalavra(frase) {
    const palavras = frase.split(' ');
    let maior = palavras[0];
    for (const palavra of palavras) {
        if (palavra.length > maior.length) maior = palavra;
    }
    return maior;
}
console.log("Maior palavra:", maiorPalavra("Hoje é um excelente dia para programar"));
