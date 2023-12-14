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
        }, 100); // Ajuste conforme necessário

        setTimeout(function() {
            document.body.style.backgroundColor = "#fff"
        }, 2500)

    }

    function clickBtnCarregar(){
        document.getElementById('carregar').style.opacity = 0;
        document.getElementById('carregar').style.overflow = 'hidden'
        document.getElementById('carregar').style.cursor = 'default'
        
        setTimeout( () => {
            barraProgresso.style.display = 'block';
            textoCarregamento.style.display = 'block';
            divProgresso.style.display = 'block';

            iniciarContador();
        }, 1000)
    }

    // Animação Scroll

    const Observa = new IntersectionObserver((arrastar) => {
        arrastar.forEach((rasta) =>{
            if (rasta.isIntersecting) {
            rasta.target.classList.add('depoisScroll')
            } else{
                rasta.target.classList.remove('depoisScroll')
            }
        })
    })

    const descerScroll = document.querySelectorAll(".descerScroll");
    const leftScroll = document.querySelectorAll(".leftScroll");
    const rightScroll = document.querySelectorAll(".rightScroll");
    const subirScroll = document.querySelectorAll(".subirScroll");

    descerScroll.forEach((descerScroll) => Observa.observe (descerScroll))
    leftScroll.forEach((leftScroll) => Observa.observe(leftScroll));
    rightScroll.forEach((rightScroll) => Observa.observe(rightScroll));
    subirScroll.forEach((subirScroll) => Observa.observe(subirScroll));

    //camera na estrela forjando

    var mediaStream;
    const btnCamera = document.getElementById('btnCamera');
    const tituloCamera = document.getElementById('tituloCamera');
    const camera = document.getElementById('camera');
    const tituloForja = document.getElementById('tituloForja');
    const btnFoto = document.getElementById('btnFoto');
    const foto = document.getElementById('foto');
    const tituloForjaTexto = document.getElementById('tituloForjaTexto');

    function abrirCamera(){
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                mediaStream = stream;
                const areaVideo = document.getElementById('camera');
                areaVideo.srcObject = stream;
            })
            .catch(function (error) {
                console.error('erro ao acessar a camera:', error)
            })
    }

    function tirarFoto() {

        const areaVideo = document.getElementById('camera');
        const canvas = document.createElement('canvas');
        canvas.width = areaVideo.videoWidth;
        canvas.height = areaVideo.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);

        const imageDataURL = canvas.toDataURL();

        const fotoDiv = document.getElementById('foto');
        fotoDiv.style.backgroundImage = `url(${imageDataURL})`;
    }

    btnCamera.addEventListener('click', () => {
        
        setTimeout(() => {
            btnCamera.style.display = 'none'
            tituloCamera.style.display = 'none'
        }, 2000);

        btnCamera.style.opacity = 0;
        btnCamera.style.overflow = 'hidden';

        tituloCamera.style.opacity = 0;
        tituloCamera.style.overflow = 'hidden';

        setTimeout(() => {
            camera.style.display = 'block'
        }, 1000)

        setTimeout(() =>{
            btnFoto.style.opacity = 1;
            camera.style.opacity = 1;
        }, 2000)

        abrirCamera()
    })

    btnFoto.addEventListener('click', () => {
        

        setTimeout(() => {
            camera.style.display = 'none'
            btnFoto.style.display = 'none'
            foto.style.display = 'block'
        }, 1000);

        camera.style.opacity = 0;
        btnFoto.style.opacity = 0;
        tituloForja.style.opacity = 0;


        setTimeout(() =>{
            foto.style.opacity = 1;
            tituloForja.style.opacity = 1;
        }, 2000)

        tirarFoto();

    })

// mobile

let estrelas = document.querySelectorAll('.star');
let luas = document.querySelectorAll('.lua');
let meteoros = document.querySelectorAll('.meteoro');
let satelites = document.querySelectorAll('.satelite');
let antenas = document.querySelectorAll('.antena');

window.onload = function() {
    checkScreenSize();
};

window.onresize = function() {
    checkScreenSize();
};

function checkScreenSize() {
    if (window.innerWidth <= 425) {
    
        estrelas.forEach(Element => {
            Element.classList.remove('fa-xl')
            Element.classList.add('fa-2xs')
        })
        satelites.forEach(Element => {
            Element.classList.remove('fa-xl')
            Element.classList.add('fa-2xs')
        })

        antenas.forEach(Element => {
            Element.classList.remove('fa-xl')
            Element.classList.add('fa-2xs')
        })

        meteoros.forEach(Element => {
            Element.classList.remove('fa-xl')
            Element.classList.add('fa-2xs')
        })

        luas.forEach(Element => {
            Element.classList.remove('fa-lg')
            Element.classList.add('fa-2xs')
        })

    } else if (window.innerWidth > 425 && window.innerWidth <= 768) {
        // Lógica para tela maior que 425px e menor ou igual a 768px
    } else {
        // Lógica para tela maior que 768px
    }
};

document.querySelector('#carregar').addEventListener("click", function () {
    if (window.innerWidth <= 425) {
        setTimeout( () => {
            clickBtnCarregar()
        },1000);
    } else {
        clickBtnCarregar();
    }
});;

// json

function escolher(idioma){
    fetch(`textos_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {

            for (let i = 1; i < 40; i++){
                document.querySelector(`.texto${i}`).textContent = texto[`titulo${i}`]
            }

        })
        .catch(error => console.error('Erro buscando textos: ', error));
}
escolher('ptbr')

//video

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('myVideo');
    var videoContainer = document.getElementById('video-container');

    video.addEventListener('canplay', function() {
        video.play();
    });

    videoContainer.addEventListener('mouseenter', function() {
        video.play();
    });

    videoContainer.addEventListener('mouseleave', function() {
        video.pause();
    });
});
