// 3) Conversão de temperaturas
function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}
function fahrenheitParaCelsius(f) {
    return (f - 32) * 5/9;
}
console.log("25°C em Fahrenheit:", celsiusParaFahrenheit(25));
console.log("77°F em Celsius:", fahrenheitParaCelsius(77));