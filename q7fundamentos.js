
// 7) Modificação de palavras em uma frase
function modificaFrase(frase) {
    return frase.split(' ').map(palavra =>
        palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
    ).join(' ');
}
console.log("Frase modificada:", modificaFrase("Hoje é um ótimo DIA para Programar"));

