let produtos = [
    {
        nome: 'Camiseta',
        preco: 59.00,
        desconto: 0.1
    },
    {
        nome: 'Calça',
        preco: 149.90,
        desconto: 0.1
    },
    {
        nome: 'Tênis',
        preco: 299.99,
        desconto: 0.1
    }
]

produtos.forEach((produto) => {
    let numerodesconto = (produto.preco * produto.desconto);
    let novoPreco = produto.preco - numerodesconto;
    console.log(`O novo preço do produto: ${produto.nome} é R$: ${novoPreco.toFixed(2)}`);
});