// 2) Área de um triângulo (fórmula de Heron)
function areaTriangulo(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
console.log("Área do triângulo:", areaTriangulo(3, 4, 5));





