let numCartas = 0;

//perguntar ao jogador quantos cartas quer jogar pelo prompt
//enquanto o numero nao atender as condicoes, o prompt deve ser repetido

function numeroCartas() {
    while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
        numCartas = parseInt(prompt("Quantas cartas quer jogar?")); {

            if (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
                alert("Número inválido, digite novamente.")
            }
        }
    }
}
numeroCartas();