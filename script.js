let numCartas = 0;

/* Perguntar ao usuário quantas cartas quer jogar pelo prompt,
enquanto o numero não atender as condições, o prompt deve ser repetido*/

function numeroCartas() {
    while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
        numCartas = parseInt(prompt("Quantas cartas quer jogar?")); {

            if (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
                alert("Número inválido, digite novamente.")
            }
        }
    }
}
numeroCartas(); //executa a condição do numero de cartas

//Declarando as imgs dentro do js
let img1 = `<img src="./imgs/bobrossparrot.gif">`;
let img2 = `<img src="imgs/explodyparrot.gif">`;
let img3 = `<img src="imgs/fiestaparrot.gif">`;
let img4 = `<img src="imgs/metalparrot.gif">`;
let img5 = `<img src="imgs/revertitparrot.gif">`;
let img6 = `<img src="imgs/tripletsparrot.gif">`;
let img7 = `<img src="imgs/unicornparrot.gif">`;

let cartasDuplicadas = [img1, img1, img2, img2, img3, img3, img4, img4, img5, img5, img6, img6, img7, img7]; //banco de cartas que será puxado para o banco de cartas do jogo
let cartasDoJogo = []; //banco de cartas que entrarão no jogo

/* Loop que acessa as cartas do banco original e insere no banco de cartas do jogo
de acordo com a quantidade de cartas digitada pelo usuário*/
for (let i = 0; i < numCartas; i++) {
    cartasDoJogo.push(cartasDuplicadas[i]);
    console.log(cartasDoJogo);
}

// Embaralhando as cartas do jogo
cartasDoJogo.sort(embaralhar);

function embaralhar() {
    return Math.random() - 0.5;
}

//Distribuir cartas no tabuleiro: loop que manipula o DOM para executar a criação das cartas através do banco de cartas do jogo
function distribuirCartas() {
    const ul = document.querySelector('ul');

    for (let j = 0; j < numCartas; j++) {
        let li = document.createElement('li');
        let createCard = document.createElement('div');
        createCard.classList.add("card");
        createCard.setAttribute("onclick", "virarCarta(this)");
        createCard.setAttribute('data-parrot', cartasDoJogo[j]);

        createCard.innerHTML += `
            <div class="front-face face">
                <img clas="bkgParrot" src="./imgs/back.png">
            </div>
            <div class="back-face face">
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

//Virar as cartas ao clicar
function virarCarta(cartaClicada) {
    if (cartaClicada.classList.contains("virar-carta")) {
        return;
    }

    if (firstClick === '') {
        cartaClicada.classList.add("virar-carta");
        firstClick = cartaClicada;
    } else if (secondClick === '') {
        cartaClicada.classList.add("virar-carta")
        secondClick = cartaClicada;

        setTimeout(validaCartas, 1000)

    }

}

function validaCartas() {
    const primeiraCarta = firstClick.getAttribute("data-parrot");
    const segundaCarta = secondClick.getAttribute("data-parrot");

    if (primeiraCarta === segundaCarta) {

    } else {
        firstClick.classList.remove('virar-carta');
        secondClick.classList.remove('virar-carta');
        firstClick = '';
        secondClick = '';
    }
}