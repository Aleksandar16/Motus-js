import { linkName } from "./level.js";
import { isGameStart } from "./game-started.js";
import { randomWordApi } from "./wording.js";
import { wordlist } from "./wordlist.js";

const t = (x) => {
    let a = x;
    const getT = () => a;
    const setT = (b) => a = b;
    return [getT, setT];
}

const [gameStart, setGameStart] = t(false);

[...document.querySelectorAll("button[data-difficulty]")].map(b => {b.addEventListener("click", () => {
    linkName(b.dataset.difficulty, setGameStart, gameStart);
})})

document.querySelector("#forfeit").addEventListener("click", () => {
    setGameStart(false);
    isGameStart(gameStart);
})

let wordToGuess = randomWordApi(wordlist, 5);

// on récupère la value de chaque input allant de l'id 'case1' à 'case5' et on forme un mot
let wordToWrite =
    document.getElementById("case1").value +
    document.getElementById("case2").value +
    document.getElementById("case3").value +
    document.getElementById("case4").value +
    document.getElementById("case5").value +
    document.getElementById("case6").value +
    document.getElementById("case7").value;

// on ajoute aux inputs un listener qui vérifie que chaque input ne contient qu'une seule lettre et bloque la saisie si ce n'est pas le cas
for (let i = 1; i <= 7; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });
}

// seulement quand chaque case est remplie, les inputs sont bloqués
for (let i = 1; i <= 7; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (
            document.getElementById("case1").value != "" &&
            document.getElementById("case2").value != "" &&
            document.getElementById("case3").value != "" &&
            document.getElementById("case4").value != "" &&
            document.getElementById("case5").value != "" &&
            document.getElementById("case6").value != "" &&
            document.getElementById("case7").value != ""
        ) {
            for (let i = 1; i <= 7; i++) {
                document.getElementById("case" + i).disabled = true;
            }
        }
    });
}

// on console log le type de wordToGuess et wordToWrite pour voir si c'est bien un string
console.log(typeof wordToGuess);
console.log(typeof wordToWrite);

// on converti l'objet wordToGuess en string
wordToGuess = wordToGuess.toString();
console.log(typeof wordToGuess);

// on converti wordToGuess et wordToWrite en array
wordToGuess = wordToGuess.split("");
wordToWrite = wordToWrite.split("");

// on compare les deux arrays avec un listener quand toutes les cases sont remplis qui
// si les deux arrays sont identiques, on console log "gagné"
// sinon on console log "perdu"
for (let i = 1; i <= 7; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (
            document.getElementById("case1").value != "" &&
            document.getElementById("case2").value != "" &&
            document.getElementById("case3").value != "" &&
            document.getElementById("case4").value != "" &&
            document.getElementById("case5").value != "" &&
            document.getElementById("case6").value != "" &&
            document.getElementById("case7").value != ""
        ) {
            if (wordToGuess.toString() === wordToWrite.toString()) {
                console.log("gagné");
            } else {
                console.log("perdu");
            }
        }
    });
}