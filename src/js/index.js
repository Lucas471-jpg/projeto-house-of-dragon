
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();


        marcarBotaoSelecionado(botao);


        esconderImagemAtiva();


        mostrarImagemFundo(indice);


        escondeInformacaoAtiva();


        mostrarInformacoes(indice);

    });
});


function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function escondeInformacaoAtiva() {
    const informacoesAtiva = document.querySelector('.informacoes.ativa');
    informacoesAtiva.classList.remove('ativa');
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}
