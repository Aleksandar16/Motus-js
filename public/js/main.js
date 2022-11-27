import { linkName } from "./level.js";
import { isGameStart } from "./game-started.js";
import { randomWord, randomWordApi } from "./wording.js";
import { wordlist } from "./wordlist.js";

const t = (x) => {
  let a = x;
  const getT = () => a;
  const setT = (b) => (a = b);
  return [getT, setT];
};

const [gameStart, setGameStart] = t(false);

[...document.querySelectorAll("button[data-difficulty]")].map((b) => {
  b.addEventListener("click", () => {
    linkName(b.dataset.difficulty, setGameStart, gameStart);
  });
});

document.querySelector("#forfeit").addEventListener("click", () => {
  setGameStart(false);
  isGameStart(gameStart);
});

// let wordToGuess = randomWordApi(wordlist, 7);
let wordToGuess = randomWord(wordlist, 7);
console.log(wordToGuess);
let wordToGuessArray = wordToGuess.split("");

// on ajoute aux inputs un listener qui vérifie que chaque input ne contient qu'une seule lettre et bloque la saisie si ce n'est pas le cas
for (let i = 1; i < 8; i++) {
  document.getElementById("case" + i).addEventListener("input", function () {
    if (this.value.length > 1) {
      this.value = this.value.slice(0, 1);
    }
  });
}

// on ajoute aux inputs un listener qui lowercase la lettre saisie
for (let i = 1; i < 8; i++) {
  document.getElementById("case" + i).addEventListener("input", function () {
    this.value = this.value.toLowerCase();
  });
}

// on bloque tous les inputs de la case 8 à la case 42
for (let i = 8; i < 43; i++) {
  document.getElementById("case" + i).disabled = true;
}

// première ligne
for (let i = 1; i < 8; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 1; j < 8; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      let wordArray = word.split("");
      console.log(wordArray);
      console.log(wordToGuessArray);
      for (let i = 1; i < 8; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      for (let i = 8; i < 15; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      if (word === wordToGuess) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé le mot !");
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 1)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 8)).value = wordArray[k];
          document.querySelector("#case" + (k + 8)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 8)).disabled = true;
        } else if (wordToGuessArray.includes(wordArray[k])) {
          document.querySelector("#case" + (k + 1)).style.backgroundColor =
            "orange";
        } else {
          document.querySelector("#case" + (k + 1)).style.backgroundColor =
            "royalblue";
        }
      }
    }
  });
}

// deuxième ligne
for (let i = 8; i < 15; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 8; j < 15; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      let wordArray = word.split("");
      console.log(wordArray);
      console.log(wordToGuessArray);
      for (let i = 8; i < 15; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      for (let i = 15; i < 22; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      if (word === wordToGuess) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé le mot !");
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 8)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 15)).value = wordArray[k];
          document.querySelector("#case" + (k + 15)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 15)).disabled = true;
        } else if (wordToGuessArray.includes(wordArray[k])) {
          document.querySelector("#case" + (k + 8)).style.backgroundColor =
            "orange";
        } else {
          document.querySelector("#case" + (k + 8)).style.backgroundColor =
            "royalblue";
        }
      }
    }
  });
}

// troisième ligne
for (let i = 15; i < 22; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 15; j < 22; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      let wordArray = word.split("");
      console.log(wordArray);
      console.log(wordToGuessArray);
      for (let i = 15; i < 22; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      for (let i = 22; i < 29; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      if (word === wordToGuess) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé le mot !");
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 15)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 22)).value = wordArray[k];
          document.querySelector("#case" + (k + 22)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 22)).disabled = true;
        } else if (wordToGuessArray.includes(wordArray[k])) {
          document.querySelector("#case" + (k + 15)).style.backgroundColor =
            "orange";
        } else {
          document.querySelector("#case" + (k + 15)).style.backgroundColor =
            "royalblue";
        }
      }
    }
  });
}

// quatrième ligne
for (let i = 22; i < 29; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 22; j < 29; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      let wordArray = word.split("");
      console.log(wordArray);
      console.log(wordToGuessArray);
      for (let i = 22; i < 29; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      for (let i = 29; i < 36; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      if (word === wordToGuess) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé le mot !");
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 22)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 29)).value = wordArray[k];
          document.querySelector("#case" + (k + 29)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 29)).disabled = true;
        } else if (wordToGuessArray.includes(wordArray[k])) {
          document.querySelector("#case" + (k + 22)).style.backgroundColor =
            "orange";
        } else {
          document.querySelector("#case" + (k + 22)).style.backgroundColor =
            "royalblue";
        }
      }
    }
  });
}

// cinquième ligne
for (let i = 29; i < 36; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 29; j < 36; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      let wordArray = word.split("");
      console.log(wordArray);
      console.log(wordToGuessArray);
      for (let i = 29; i < 36; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      for (let i = 36; i < 43; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      if (word === wordToGuess) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé le mot !");
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 29)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 36)).value = wordArray[k];
          document.querySelector("#case" + (k + 36)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 36)).disabled = true;
        } else if (wordToGuessArray.includes(wordArray[k])) {
          document.querySelector("#case" + (k + 29)).style.backgroundColor =
            "orange";
        } else {
          document.querySelector("#case" + (k + 29)).style.backgroundColor =
            "royalblue";
        }
      }
    }
  });
}

// sixième ligne
for (let i = 36; i < 43; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 36; j < 43; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      let wordArray = word.split("");
      console.log(wordArray);
      console.log(wordToGuessArray);
      for (let i = 36; i < 43; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      if (word === wordToGuess) {
        setTimeout(() => {
          alert("Bravo, vous avez trouvé le mot !");
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      else {
        setTimeout(() => {
          alert("Dommage, vous n'avez pas trouvé le mot ! La solution était " + wordToGuess);
          setGameStart(false);
          isGameStart(gameStart);
        }, 1000);
      }
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 36)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 43)).value = wordArray[k];
          document.querySelector("#case" + (k + 43)).style.backgroundColor =
            "red";
          document.querySelector("#case" + (k + 43)).disabled = true;
        } else if (wordToGuessArray.includes(wordArray[k])) {
          document.querySelector("#case" + (k + 36)).style.backgroundColor =
            "orange";
        } else {
          document.querySelector("#case" + (k + 36)).style.backgroundColor =
            "royalblue";
        }
      }
    }
  });
}
