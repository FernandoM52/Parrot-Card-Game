let numCartas = 0;

/* Perguntar ao usuário quantas cartas quer jogar pelo prompt,
enquanto o numero não atender as condições, o prompt deve ser repetido*/

function numeroCartas() {
    while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
        numCartas = parseInt(prompt("Digite um número par de 4 a 14 para selecionar com quantas cartas você quer jogar.")); {

            if (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
                alert("Número inválido, digite novamente.")
            } else {
                alert(`Modo de jogo selecionado: ${numCartas} cartas`);
            }
        }
    }
}
numeroCartas();

// Declarando as imgs dentro do js
let img1 = `<img data-test="face-up-image" src="./imgs/bobrossparrot.gif">`;
let img2 = `<img data-test="face-up-image" src="./imgs/explodyparrot.gif">`;
let img3 = `<img data-test="face-up-image" src="./imgs/fiestaparrot.gif">`;
let img4 = `<img data-test="face-up-image" src="./imgs/metalparrot.gif">`;
let img5 = `<img data-test="face-up-image" src="./imgs/revertitparrot.gif">`;
let img6 = `<img data-test="face-up-image" src="./imgs/tripletsparrot.gif">`;
let img7 = `<img data-test="face-up-image" src="./imgs/unicornparrot.gif">`;

let cartasDuplicadas = [img1, img1, img2, img2, img3, img3, img4, img4, img5, img5, img6, img6, img7, img7]; //banco de cartas que será puxado para o banco de cartas do jogo
let cartasDoJogo = []; //banco de cartas que entrarão no jogo

/* Loop que acessa as cartas do banco original e insere no banco de cartas do jogo
de acordo com a quantidade de cartas digitada pelo usuário*/
for (let i = 0; i < numCartas; i++) {
    cartasDoJogo.push(cartasDuplicadas[i]);
}

// Embaralhando as cartas do jogo
cartasDoJogo.sort(embaralhar);

function embaralhar() {
    return Math.random() - 0.5;
}

// Distribuição das cartas no tabuleiro: loop que manipula o DOM para ciar as cartas dinamicamente através do banco de cartas do jogo
function distribuirCartas() {
    const ul = document.querySelector('ul');

    for (let j = 0; j < numCartas; j++) {
        const li = document.createElement('li');
        const createCard = document.createElement("div");
        createCard.classList.add("card");
        createCard.setAttribute("data-test", "card");
        createCard.setAttribute("onclick", "virarCarta(this)");
        createCard.setAttribute("data-parrot", cartasDoJogo[j]);

        createCard.innerHTML += `
            <div class="back-face face">
                <img clas="bkgParrot" data-test="face-down-image" src="./imgs/back.png">
            </div>
            <div class="front-face face">
                ${cartasDoJogo[j]}
            </div>
            `;

        li.appendChild(createCard);
        ul.appendChild(li);
    }
}
distribuirCartas();

let firstClick = '';
let secondClick = '';
let jogadas = 0;

// Função que gira as cartas ao clicar e armanzena as duas cartas clicadas em variaveis diferentes para que sejam comparadas posteriormente
function virarCarta(cartaClicada) {
    if (cartaClicada.classList.contains("virar-carta")) {
        return;
    }

    if (firstClick === '') {
        cartaClicada.classList.add("virar-carta");
        firstClick = cartaClicada;
    } else if (secondClick === '') {
        cartaClicada.classList.add("virar-carta");
        secondClick = cartaClicada;

        setTimeout(validaCartas, 1000) // Executa a verificação das cartas 1s após virar a segunda carta
    }
    jogadas++;
}

// Função que confere se as cartas clicadas são iguas e reseta as variáveis das cartas clicadas após a verificação
function validaCartas() {
    const primeiraCarta = firstClick.getAttribute("data-parrot");
    const segundaCarta = secondClick.getAttribute("data-parrot");

    if (primeiraCarta === segundaCarta) {
        firstClick.classList.add('parEncontrado');
        secondClick.classList.add('parEncontrado');
        firstClick = '';
        secondClick = '';

        setTimeout(fimDoJogo, 500); // Executa a função fim de jogo quando todas as cartas estiverem viradas para cima

    } else {
        firstClick.classList.remove('virar-carta');
        secondClick.classList.remove('virar-carta');
        firstClick = '';
        secondClick = '';
    }
}

// Função que verifica se todas as cartas viradas possuem a classe "parEncontrado", se sim, o jogo terminará
function fimDoJogo() {
    const paresEncontrados = document.querySelectorAll('.parEncontrado');
    if (paresEncontrados.length === numCartas) {
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}