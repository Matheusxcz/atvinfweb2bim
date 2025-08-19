

// 11) Retornar os últimos n elementos de uma lista
function ultimosElementos(lista, n) {
    return lista.slice(-n);
}
console.log("Últimos elementos:", ultimosElementos([10, 58, 68, 88, 25, 45], 3)); // [88, 25,