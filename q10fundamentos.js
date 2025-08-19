
// 10) Converter nome e sobrenome no formato solicitado
function nomeInvertido(nomeCompleto) {
    const partes = nomeCompleto.trim().split(' ');
    if (partes.length < 2) return nomeCompleto;
    const iniciais = partes.slice(1, -1).map(n => n[0].toUpperCase() + '.').join(' ');
    return `${iniciais} ${partes[0]}`;
}
console.log("Nome invertido:", nomeInvertido("Alan Mathison Turing")); // T. M. Alan

