// 1) Comparar dois números, considerando ímpar sempre maior
function maiorNumero(a, b) {
    const aImpar = a % 2 !== 0;
    const bImpar = b % 2 !== 0;
    if (aImpar && !bImpar) return a;
    if (!aImpar && bImpar) return b;
    return a > b ? a : b;
}
console.log("Maior número (considerando ímpar maior):", maiorNumero(4, 7));

