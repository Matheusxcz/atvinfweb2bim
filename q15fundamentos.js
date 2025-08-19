

// 15) Ordenar elementos numéricos de uma lista
function ordenarLista(lista) {
    return lista.slice().sort((a, b) => a - b);
}
console.log("Lista ordenada:", ordenarLista([5, 2, 9, 1, 7])); // [1,2,5,7,9]