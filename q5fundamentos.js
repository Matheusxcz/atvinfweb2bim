// 5) Checagem de três números entre 50 e 99
function checaIntervalo(a, b, c) {
    if (
        a >= 50 && a <= 99 &&
        b >= 50 && b <= 99 &&
        c >= 50 && c <= 99
    ) {
        console.log("Sucesso: Todos os números estão entre 50 e 99.");
    } else {
        console.log("Erro: Um ou mais números estão fora do intervalo 50-99.");
    }
}
checaIntervalo(60, 70, 80); // Sucesso
checaIntervalo(45, 70, 80); // Erro