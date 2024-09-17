let pessoas = [
    {
        nome: "Michael de Santa",
        idade: 53,
        cidade: "Los Santos"
    },
    {
        nome: "Carl 'CJ' Johnson",
        idade: 32,
        cidade: "Los Santos"
    },
    {
        nome: "Niko Bellic",
        idade: 46,
        cidade: "Liberty City"
    },
    {
        nome: "Antonio 'Toni' Cipriani",
        idade: 38,
        cidade: "Liberty City"
    },
    {
        nome: "Tommy Vercetti",
        idade: 49,
        cidade: "Vice City"
    }
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome} Idade: ${pessoa.idade} Cidade: ${pessoa.cidade}`);
}