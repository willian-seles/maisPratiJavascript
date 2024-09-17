let alunos = [
    {
        nome: "Maria Joaquina",
        nota1: 8,
        nota2: 8
    },
    {
        nome: "Mario Joaquim",
        nota1: 3,
        nota2: 7
    },
    {
        nome: "João Mariano",
        nota1: 8,
        nota2: 7
    },
    {
        nome: "Marina Joana",
        nota1: 2,
        nota2: 10
    }
]

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`O aluno ${aluno.nome} teve média ${media.toFixed(2)}`);
}