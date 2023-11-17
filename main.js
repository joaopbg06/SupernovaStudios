document.querySelector('#carregar').addEventListener("click", function () {
    document.getElementById('carregar').style.opacity = 0;
    barraProgresso.style.display = 'block';
    textoCarregamento.style.display = 'block';
    divProgresso.style.display = 'block';

    iniciarContador();
});

let barraProgresso = document.querySelector('#barraProgresso');
let textoCarregamento = document.querySelector('.textoCarregamento');
let divProgresso = document.querySelector('#progresso');
let telaCarregamento = document.querySelector(".telaCarregamento");

let progresso = 0;
let posicao = 0;
let contador = 0;

function trocarConteudo() {
    textoCarregamento.classList.add('fadeOut');
    setTimeout(() => {
        textoCarregamento.innerHTML = frases[contador];
        textoCarregamento.classList.remove('fadeOut');
    }, 500); // Tempo deve coincidir com a duração da transição no CSS (0.5s no exemplo)
}

function atualizarContador() {
    trocarConteudo();
    contador++;
    progresso = (contador / 10) * 100;
    document.getElementById('progresso').style.width = progresso + '%';

    if (contador === 10) {
        pausarContador();
        telaCarregamento.style.display = 'none';
        document.getElementById("header").style.display = 'block';
        document.getElementById("main").style.display = 'block';
        document.getElementById("footer").style.display = 'block';
    }
}

function pausarContador() {
    clearInterval(posicao);
}

function iniciarContador() {
    if (contador !== 10) {
        posicao = setInterval(atualizarContador, 5000);
    }   
}

let frases = [
    "",
    "Preparando para a criação",
    "Pegando o Martelo e a Bigorna",
    "Forjando uma nova estrela",
    "Estrela sendo forjada aguarde",
    "Estrelas e mais Estrelas MUITAS Estrelas",
    "Estrela forjada",
    "Ei Geppetto sai da tela de Loading!!!",
    "Você tá realmente lendo isso? Ok então aqui vai um Poema",
    "A rosa no cume...",
    "Tudo Pronto!"
];
