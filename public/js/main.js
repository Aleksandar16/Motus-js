import { linkName } from "./level.js";
import { isGameStart } from "./game-started.js";

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

// on pioche un mot aléatoire dans le dictionnaire
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

let result = fetch("https://random-word-api.herokuapp.com/word?number=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


// tant que result à moins ou plus de 5 lettres, on pioche un autre mot
while (result.length < 5 || result.length > 5) {
    result = fetch("https://random-word-api.herokuapp.com/word?number=1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

// on transforme le result en string
let resultString = result.toString();
// on split le result en lettres dans un tableau
let resultArray = resultString.split("");

// ce qui donne par exemple : ["a", "b", "c", "d", "e"]

// on récupère la value de chaque input allant de l'id 'case1' à 'case5' et on forme un mot
let mot =
    document.getElementById("case1").value +
    document.getElementById("case2").value +
    document.getElementById("case3").value +
    document.getElementById("case4").value +
    document.getElementById("case5").value +
    document.getElementById("case6").value +
    document.getElementById("case7").value;

// on split le mot en lettres dans un tableau
let motArray = mot.split("");

// on ajoute aux inputs un listener qui vérifie que chaque input ne contient qu'une seule lettre et bloque la saisie si ce n'est pas le cas
for (let i = 1; i < 8; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });
}

// seulement quand chaqué case est remplie, les inputs sont bloqués
for (let i = 1; i < 8; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (document.getElementById("case1").value !== "" && document.getElementById("case2").value !== "" && document.getElementById("case3").value !== "" && document.getElementById("case4").value !== "" && document.getElementById("case5").value !== "" && document.getElementById("case6").value !== "" && document.getElementById("case7").value !== "") {
            for (let i = 1; i < 8; i++) {
                document.getElementById("case" + i).disabled = true;
            }
        }
    });
}

// seulement quand chaqué case est remplie, si la lettre ne fait pas partie du mot à trouver, on colorise le background de la lettre en rouge
for (let i = 1; i < 8; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (document.getElementById("case1").value !== "" && document.getElementById("case2").value !== "" && document.getElementById("case3").value !== "" && document.getElementById("case4").value !== "" && document.getElementById("case5").value !== "" && document.getElementById("case6").value !== "" && document.getElementById("case7").value !== "") {
            for (let i = 1; i < 8; i++) {
                if (resultArray.includes(motArray[i - 1]) === false) {
                    document.getElementById("case" + i).style.backgroundColor = "red";
                }
            }
        }
    });
}

// seulement quand chaqué case est remplie, si la lettre fait partie du mot à trouver et qu'elle est à la bonne place, on colorise le background de la lettre en vert
for (let i = 1; i < 8; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (document.getElementById("case1").value !== "" && document.getElementById("case2").value !== "" && document.getElementById("case3").value !== "" && document.getElementById("case4").value !== "" && document.getElementById("case5").value !== "" && document.getElementById("case6").value !== "" && document.getElementById("case7").value !== "") {
            for (let i = 1; i < 8; i++) {
                if (resultArray[i - 1] === motArray[i - 1]) {
                    document.getElementById("case" + i).style.backgroundColor = "green";
                }
            }
        }
    });
}
// seulement quand chaqué case est remplie, si la lettre fait partie du mot à trouver et qu'elle est à la mauvaise place, on colorise le background de la lettre en jaune
for (let i = 1; i < 8; i++) {
    document.getElementById("case" + i).addEventListener("input", function () {
        if (document.getElementById("case1").value !== "" && document.getElementById("case2").value !== "" && document.getElementById("case3").value !== "" && document.getElementById("case4").value !== "" && document.getElementById("case5").value !== "" && document.getElementById("case6").value !== "" && document.getElementById("case7").value !== "") {
            for (let i = 1; i < 8; i++) {
                if (resultArray.includes(motArray[i - 1]) === true && resultArray[i - 1] !== motArray[i - 1]) {
                    document.getElementById("case" + i).style.backgroundColor = "yellow";
                }
            }
        }
    });
}