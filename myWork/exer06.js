let funcionarios = [
    {
        nome: "Dayne Smith",
        cargo: "CEO",
        salario: 33600.98
    },
    {
        nome: "Seu Zé",
        cargo: "Diretor",
        salario: 27500.00
    },
    {
        nome: "Richard David",
        cargo: "Programador Java",
        salario: 9300.18
    },
    {
        nome: "Richard Richards",
        cargo: "Programador Java",
        salario: 7300.18
    },
    {
        nome: "Richard Williams",
        cargo: "Programador Java",
        salario: 5300.18
    }
]

let salario = 9300.17;

let novoFuncionarios = [];
for (let funcionario of funcionarios) {
    if (funcionario.salario > salario) {
        novoFuncionarios.push(funcionario);
    }
}


console.log(novoFuncionarios);