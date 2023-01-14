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
cartasDoJogo.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}