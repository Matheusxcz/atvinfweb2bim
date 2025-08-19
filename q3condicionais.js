
// 3) Soma de pares e ímpares de 0 a 99
let somaPares = 0, somaImpares = 0;
for (let i = 0; i <= 99; i++) {
    if (i % 2 === 0) somaPares += i;
    else somaImpares += i;
}
console.log("Soma dos pares:", somaPares);
console.log("Soma dos ímpares:", somaImpares);

