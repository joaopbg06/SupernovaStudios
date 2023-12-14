
const IMAGENS = [
    'img/imagem1.png', 
    'img/imagem2.png', 
    'img/imagem3.png',
    'img/imagem4.png'
];

let imgIndice = 0;
let intervaloID;


const IMG = document.getElementById('carrosselImagem');
const bolinhas = document.querySelectorAll('.bolinha');
const progressoCarrossel = document.querySelectorAll('.progressoCarrossel')

function carregarImagem() {
    IMG.style.opacity = 0; // Inicia a transição (fade-out)
    resetarBolinhas(); // Reseta todas as bolinhas
    bolinhas[imgIndice].classList.add('ativa'); // Ativa a bolinha correspondente

    setTimeout(() => {
        IMG.style.backgroundImage = `url(${IMAGENS[imgIndice]})`;
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

    clearInterval(intervaloID);
    intervaloID = setInterval(passarIMG, 8000);
}

// Adiciona eventos de clique para as bolinhas
bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => {
        imgIndice = index;
        clearInterval(intervaloID);
        carregarImagem();
        intervaloID = setInterval(passarIMG, 8000);
    });
});


$('#carrosselImagem').swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') {
            passarIMG(); // Chame a função passarIMG() para passar para a próxima imagem
        } else if (direction == 'right') {
            // Adicione a lógica para voltar para a imagem anterior, se necessário
        }
    }
});

passarIMG()

