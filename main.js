// Tela de carregamento

let frases = [
    "Carregando",
    "Preparando para a criação",
    "Pegando o Martelo e a Bigorna",
    "Forjando uma nova estrela",
    "Estrela sendo forjada aguarde",
    "Estrelas e mais Estrelas MUITAS Estrelas",
    "Estrela forjada",
    "Ei Geppetto sai da tela de Loading!!!",
    "Você tá realmente lendo isso?",
    "Tudo Pronto!",
];

let telaCarregamento = document.querySelector(".telaCarregamento");
var header = document.getElementById("header");
var main = document.getElementById("main");
var footer = document.getElementById("footer");

let barraProgresso = document.querySelector('#barraProgresso');
let textoCarregamento = document.querySelector('.textoCarregamento');
let divProgresso = document.querySelector('#progresso');
const textoLogoAnimacao = document.querySelector('.texto-logo');

let progresso = 0;
let posicao = 0;
let contador = 0;


function trocarConteudo() {
    textoCarregamento.classList.add('fadeOut');
    setTimeout(() => {
        let contadorFrases = contador - 1;
        textoCarregamento.innerHTML = frases[contadorFrases];
        textoCarregamento.classList.remove('fadeOut');
        
    }, 500); }

function atualizarContador() {

    contador++;
    trocarConteudo();

    progresso = (contador / 10) * 100;
    document.getElementById('progresso').style.width = progresso + '%';

    if (contador === 10) {
        pausarContador();

        setTimeout(terminoContador, 6000)
        setTimeout(mostrarSite, 9000)
    } }

function pausarContador() {
    clearInterval(posicao);
}

function iniciarContador() {
    if (contador !== 10) {
        posicao = setInterval(atualizarContador, 5000);
}}

function terminoContador(){

    setTimeout( () => {
        barraProgresso.style.display = 'none';
        divProgresso.style.display = 'none';
        textoCarregamento.style.display = 'none';

        const check = document.getElementById('check');
        const iconCheck = document.createElement('div');
    
        iconCheck.classList.add('iconCheck');
        iconCheck.innerHTML = `
        <i class="fa-sharp fa-regular fa-circle-check fa-fade fa-2xl"></i>
        `;

        check.appendChild(iconCheck);
        check.style.opacity = 1;
    }, 1000)

    
    barraProgresso.style.opacity = 0;
    textoCarregamento.style.opacity = 0;
    
}

function mostrarSite(){

  // Adiciona estilo para animar a tela de carregamento
    telaCarregamento.style.opacity = "0";
    telaCarregamento.style.height = "0";

  // Adiciona estilo para animar o header
    header.style.opacity = "1";
    header.style.height = "auto";
    header.style.transform = "translateY(100%)"; // Começa abaixo da viewport

    textoLogoAnimacao.style.animationName = 'fontalicious';
    textoLogoAnimacao.style.animationIterationCount = '4';
    textoLogoAnimacao.style.animationDuration = '1s';

  // Adiciona estilo para animar o main e o footer
    main.style.opacity = "1";
    main.style.height = "auto";

    footer.style.opacity = "1";
    footer.style.height = "auto";

    setTimeout(function() {
        header.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        header.style.transform = "translateY(0)"; // Move para a posição inicial (acima da viewport)
      }, 10); // Ajuste conforme necessário


}

document.querySelector('#carregar').addEventListener("click", function () {
    document.getElementById('carregar').style.opacity = 0;
    barraProgresso.style.display = 'block';
    textoCarregamento.style.display = 'block';
    divProgresso.style.display = 'block';

    iniciarContador();
});

// Carrosel 

const IMAGENS = [
    'img/imagem1.png', 
    'img/imagem2.png', 
    'img/imagem3.png',
    'img/imagem4.png'
];

let imgIndice = 0;


const IMG = document.getElementById('carrosselImagem');
const bolinhas = document.querySelectorAll('.bolinha');
const progressoCarrossel = document.querySelectorAll('.progressoCarrossel')

function carregarImagem() {
    IMG.style.opacity = 0; // Inicia a transição (fade-out)
    resetarBolinhas(); // Reseta todas as bolinhas
    bolinhas[imgIndice].classList.add('ativa'); // Ativa a bolinha correspondente

    setTimeout(() => {
        IMG.src = IMAGENS[imgIndice];
        IMG.style.opacity = 1; // Conclui a transição (fade-in)
    }, 500); // Tempo de espera para a transição
}

function resetarBolinhas() {
    bolinhas.forEach(bolinha => {
        bolinha.classList.remove('ativa');
    });
}

function passarIMG() {
    var limite = IMAGENS.length - 1;

    if (imgIndice < limite) {
        ++imgIndice;
        carregarImagem();
    } else {
        imgIndice = 0;
        carregarImagem();
    }
}

// Adiciona eventos de clique para as bolinhas
bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => {
        imgIndice = index;
        carregarImagem();
    });
});


setInterval(passarIMG, 8000)