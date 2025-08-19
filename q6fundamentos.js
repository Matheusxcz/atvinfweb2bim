// 6) Número com maior ocorrência em um array
function maisFrequente(arr) {
    const freq = {};
    let maxNum = arr[0], maxCount = 0;
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            maxNum = num;
        }
    }
    return maxNum;
}
console.log("Mais frequente:", maisFrequente([1, 2, 2, 3, 3, 3, 4]));
