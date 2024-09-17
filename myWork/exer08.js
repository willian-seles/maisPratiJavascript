let filmes = [
    {
        titulo: 'O Poderoso Chefão',
        diretor: 'Diretor do filme',
        anoLancamento: 1980
    },
    {
        titulo: 'Homem Aranha',
        diretor: 'Stan Lee',
        anoLancamento: 2000
    },
    {
        titulo: 'Moana',
        diretor: 'Disney',
        anoLancamento: 2017
    }
];

let somenteTitulo = [];

filmes.forEach((filme) => {
    somenteTitulo.push(filme.titulo);
});

console.log(somenteTitulo.join("\n"));