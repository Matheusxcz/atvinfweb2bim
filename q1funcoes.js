// 1) Inverter número usando switch/case
function inverteNumero(num) {
    let str = String(num);
    let invertido = '';
    for (let i = str.length - 1; i >= 0; i--) {
        switch (str[i]) {
            case '0': invertido += '0'; break;
            case '1': invertido += '1'; break;
            case '2': invertido += '2'; break;
            case '3': invertido += '3'; break;
            case '4': invertido += '4'; break;
            case '5': invertido += '5'; break;
            case '6': invertido += '6'; break;
            case '7': invertido += '7'; break;
            case '8': invertido += '8'; break;
            case '9': invertido += '9'; break;
        }
    }
    return invertido;
}
console.log("Invertido:", inverteNumero(12356)); // 65321

