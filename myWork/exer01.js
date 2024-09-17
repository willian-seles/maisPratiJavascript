let carro = {
    marca: "Honda",
    modelo: "CRV",
    ano: "2020",
    cor: "Preto"
}

for(let key in carro){
    console.log(`${key}: ${carro[key]}`);
}