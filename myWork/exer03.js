let produto = {
    limao: 2,
    laranja: 3,
    abacate: 4,
    melancia: 9,
    jaca: 13,
    pitanga: 20,
    manga: 28
}

function novoProduto(objeto, valorFiltro) {
    let novoProduto = {}

    for (let key in objeto) {

        if (objeto[key] > valorFiltro) {
            novoProduto[key] = objeto[key];
        }
    }

    return novoProduto;
}

console.log(novoProduto(produto, 4));