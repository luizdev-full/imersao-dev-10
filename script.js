let cardConteiner = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    if (dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }

    const termoBusca = document.querySelector('header input').value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca));

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardConteiner.innerHTML = ''; // Limpa os cards existentes
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.descricao}</p>
        <p>Ano de criação: ${dado.data_criacao}</p>
        <a href="${dado.link}" target="_blank">Ouça agora!</a>
        `
        cardConteiner.appendChild(article);
    }
}

iniciarBusca(); // Carrega todos os cards inicialmente