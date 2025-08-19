
// 13) Elevar cada número ao cubo e somar o total
function somaCubos(lista) {
    return lista.reduce((soma, num) => soma + Math.pow(num, 3), 0);
}
console.log("Soma dos cubos:", somaCubos([1, 2, 3, 4])); // 1+8+27+64=100

