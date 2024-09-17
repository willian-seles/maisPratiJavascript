let clientes = [
    {
        nome: "Michael de Santa",
        idade: 53,
        cidade: "Los Santos"
    },
    {
        nome: "Carl 'CJ' Johnson",
        idade: 29,
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
        idade: 30,
        cidade: "Vice City"
    }
]

let contador = 0;

clientes.forEach((cliente) => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Você possui ${clientes.length} clientes sendo que destes clientes ${contador} possuem mais de 30 anos`);