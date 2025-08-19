
// 2) Contar vogais e consoantes em uma frase
function contaVogaisConsoantes(frase) {
    let vogais = 0, consoantes = 0;
    const vogaisSet = new Set(['a','e','i','o','u','A','E','I','O','U']);
    for (const char of frase) {
        if (/[a-zA-Z]/.test(char)) {
            if (vogaisSet.has(char)) vogais++;
            else consoantes++;
        }
    }
    return { vogais, consoantes };
}
console.log("Vogais/Consoantes:", contaVogaisConsoantes("Exemplo de frase"));

