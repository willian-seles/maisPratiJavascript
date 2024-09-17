let vendas = [
    {
        produto: 'Celular',
        quantidade: 20,
        valor: 2300.00
    },
    {
        produto: 'Notebook',
        quantidade: 4,
        valor: 4900.00
    },
    {
        produto: 'Mouse',
        quantidade: 10,
        valor: 39.90
    },
    {
        produto: 'Headphone',
        quantidade: 7,
        valor: 129.00
    },
    {
        produto: 'Impressora',
        quantidade: 2,
        valor: 730.00
    }
];

let total = 0;

vendas.forEach(venda => {
    total += venda.quantidade * venda.valor;
});


console.log(`O valor total das vendas é de R$:${total.toFixed(2)}`);