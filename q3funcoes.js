
// 3) Maior e menor valor em uma lista de 10 números
function maiorMenor(lista) {
    let maior = lista[0], menor = lista[0];
    for (const num of lista) {
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }
    return { maior, menor };
}
console.log("Maior/Menor:", maiorMenor([10, 5, 22, 1, 7, 30, 18, 2, 9, 15]));

