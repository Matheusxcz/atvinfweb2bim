// 4) Verificação de números
function verificaNumeros(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30) || (num1 === 12 && num2 === 12);
}
console.log("Verificação (30, 5):", verificaNumeros(30, 5)); // true
console.log("Verificação (12, 12):", verificaNumeros(12, 12)); // true
console.log("Verificação (10, 20):", verificaNumeros(10, 20)); // true
console.log("Verificação (5, 7):", verificaNumeros(5, 7)); // false
