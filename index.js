// Criando Variáriaveis para o nome e o XP
let nomeHeroi = "Markim";
let xpHeroi = 1500;

//variável para o nível
let nivelHeroi = "Broze";

/*Estrutura de decisão para determinar o nível com base no XP
//Se (if) xpHeroi for menor ou igual a 1000, nivelHeroi vai ser "Ferro",
(else if) senão, xpHeroi for maior ou igual a 1001 e(&&) xpHeroi for menor que 2000, nivelHeroi vai ser "Broze"
(else if) senão, xpHeroi for maior ou igual a 2001 e(&&) xpHeroi for menor que 5000, nivelHeroi vai ser "Prata"
(else if) senão, xpHeroi for maior ou igual a 5001 e(&&) xpHeroi for menor que 7000, nivelHeroi vai ser "Ouro"
(else if) senão, xpHeroi for maior ou igual a 7001 e(&&) xpHeroi for menor que 8000, nivelHeroi vai ser "Platina"
(else if) senão, xpHeroi for maior ou igual a 8001 e(&&) xpHeroi for menor que 9000, nivelHeroi vai ser "Ancendente"
(else if) senão, xpHeroi for maior ou igual a 9001 e(&&) xpHeroi for menor que 10000, nivelHeroi vai ser "Imortal"
Ou (else), niveHeroi vai ser igual a "Radiante" */
if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi < 2000) {
    nivelHeroi = "Broze";
} else if (xpHeroi >= 2001 && xpHeroi < 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi < 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi < 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi < 9000) {
    nivelHeroi = "Ancendente";
} else if (xpHeroi >= 9001 && xpHeroi < 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

/* Imprimindo no console o nome, XP e nível do herói 
Texto com espaço no final concatenando com as variáveis.*/

console.log("O herói " + nomeHeroi + " possui " + xpHeroi + " de XP e está no nível " + nivelHeroi + ".");
