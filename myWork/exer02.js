let hasEditora = false;

let livro = {
    titulo: "Libertacao da mente ansiosa",
    autor: "Pe. Adriano",
    anoPublicacao: "2019",
    genero: "Cura interior"
}

for (let key in livro) {
    if (key === 'editora') {
        hasEditora = true;
    }
}

if (!hasEditora) {
    livro.editora = "Cancao Nova"
}

console.log(livro)