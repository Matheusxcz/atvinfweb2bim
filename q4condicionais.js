
// 4) Médias de 5 alunos
const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [80, 70, 75]],
    ["Aluno4", [60, 65, 68]],
    ["Aluno5", [95, 85, 90]]
];

for (const [nome, notas] of alunos) {
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    const status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
}