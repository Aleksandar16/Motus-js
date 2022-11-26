export const game = (difficulty, wordToGuess) => {
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
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case1' à 'case7' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 1; i < 8; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 1; j < 8; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      // on transforme le mot en tableau de lettres
      let wordArray = word.split("");
      // on console log les tableaux pour voir si ça marche
      console.log(wordArray);
      console.log(wordToGuessArray);
      // On bloque les inputs de la case 1 à la case 7
      for (let i = 1; i < 8; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      // On débloque les inputs de la case 8 à la case 14
      for (let i = 8; i < 15; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
      if (word === wordToGuess) {
        alert("Bravo, vous avez trouvé le mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // on compare les tableaux
      // pour chaque lettre du mot à trouver, on compare avec chaque lettre du mot entré
      // si la lettre du mot à trouver est dans le mot entré et est à la même position, on colorie la case en red
      // si la lettre du mot à trouver est dans le mot entré mais pas à la même position, on colorie la case en orange
      // si la lettre du mot à trouver n'est pas dans le mot entré, on colorie la case en bleu
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 1)).style.backgroundColor =
            "red";
          // on replace ces lettres sur la deuxième ligne
          document.querySelector("#case" + (k + 8)).value = wordArray[k];
          // on colorie la case en red
          document.querySelector("#case" + (k + 8)).style.backgroundColor =
            "red";
          // on bloque l'input
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
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case8' à 'case14' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 8; i < 15; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 8; j < 15; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      // on transforme le mot en tableau de lettres
      let wordArray = word.split("");
      // on console log les tableaux pour voir si ça marche
      console.log(wordArray);
      console.log(wordToGuessArray);
      // On bloque les inputs de la case 8 à la case 14
      for (let i = 8; i < 15; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      // On débloque les inputs de la case 15 à la case 21
      for (let i = 15; i < 22; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
      if (word === wordToGuess) {
        alert("Bravo, vous avez trouvé le mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // on compare les tableaux
      // pour chaque lettre du mot à trouver, on compare avec chaque lettre du mot entré
      // si la lettre du mot à trouver est dans le mot entré et est à la même position, on colorie la case en red
      // si la lettre du mot à trouver est dans le mot entré mais pas à la même position, on colorie la case en orange
      // si la lettre du mot à trouver n'est pas dans le mot entré, on colorie la case en bleu
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 8)).style.backgroundColor =
            "red";
          // on replace ces lettres sur la troisième ligne
          document.querySelector("#case" + (k + 15)).value = wordArray[k];
          // on colorie la case en red
          document.querySelector("#case" + (k + 15)).style.backgroundColor =
            "red";
          // on bloque l'input
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
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case15' à 'case21' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 15; i < 22; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 15; j < 22; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      // on transforme le mot en tableau de lettres
      let wordArray = word.split("");
      // on console log les tableaux pour voir si ça marche
      console.log(wordArray);
      console.log(wordToGuessArray);
      // On bloque les inputs de la case 15 à la case 21
      for (let i = 15; i < 22; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      // On débloque les inputs de la case 22 à la case 28
      for (let i = 22; i < 29; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
      if (word === wordToGuess) {
        alert("Bravo, vous avez trouvé le mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // on compare les tableaux
      // pour chaque lettre du mot à trouver, on compare avec chaque lettre du mot entré
      // si la lettre du mot à trouver est dans le mot entré et est à la même position, on colorie la case en red
      // si la lettre du mot à trouver est dans le mot entré mais pas à la même position, on colorie la case en orange
      // si la lettre du mot à trouver n'est pas dans le mot entré, on colorie la case en bleu
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 15)).style.backgroundColor =
            "red";
          // on replace ces lettres sur la quatrième ligne
          document.querySelector("#case" + (k + 22)).value = wordArray[k];
          // on colorie la case en red
          document.querySelector("#case" + (k + 22)).style.backgroundColor =
            "red";
          // on bloque l'input
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
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case22' à 'case28' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 22; i < 29; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 22; j < 29; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      // on transforme le mot en tableau de lettres
      let wordArray = word.split("");
      // on console log les tableaux pour voir si ça marche
      console.log(wordArray);
      console.log(wordToGuessArray);
      // On bloque les inputs de la case 22 à la case 28
      for (let i = 22; i < 29; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      // On débloque les inputs de la case 29 à la case 35
      for (let i = 29; i < 36; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
      if (word === wordToGuess) {
        alert("Bravo, vous avez trouvé le mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // on compare les tableaux
      // pour chaque lettre du mot à trouver, on compare avec chaque lettre du mot entré
      // si la lettre du mot à trouver est dans le mot entré et est à la même position, on colorie la case en red
      // si la lettre du mot à trouver est dans le mot entré mais pas à la même position, on colorie la case en orange
      // si la lettre du mot à trouver n'est pas dans le mot entré, on colorie la case en bleu
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 22)).style.backgroundColor =
            "red";
          // on replace ces lettres sur la cinquième ligne
          document.querySelector("#case" + (k + 29)).value = wordArray[k];
          // on colorie la case en red
          document.querySelector("#case" + (k + 29)).style.backgroundColor =
            "red";
          // on bloque l'input
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
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case29' à 'case35' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 29; i < 36; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 29; j < 36; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      // on transforme le mot en tableau de lettres
      let wordArray = word.split("");
      // on console log les tableaux pour voir si ça marche
      console.log(wordArray);
      console.log(wordToGuessArray);
      // On bloque les inputs de la case 29 à la case 35
      for (let i = 29; i < 36; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      // On débloque les inputs de la case 36 à la case 42
      for (let i = 36; i < 43; i++) {
        document.getElementById("case" + i).disabled = false;
      }
      // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
      if (word === wordToGuess) {
        alert("Bravo, vous avez trouvé le mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // on compare les tableaux
      // pour chaque lettre du mot à trouver, on compare avec chaque lettre du mot entré
      // si la lettre du mot à trouver est dans le mot entré et est à la même position, on colorie la case en red
      // si la lettre du mot à trouver est dans le mot entré mais pas à la même position, on colorie la case en orange
      // si la lettre du mot à trouver n'est pas dans le mot entré, on colorie la case en bleu
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 29)).style.backgroundColor =
            "red";
          // on replace ces lettres sur la sixième ligne
          document.querySelector("#case" + (k + 36)).value = wordArray[k];
          // on colorie la case en red
          document.querySelector("#case" + (k + 36)).style.backgroundColor =
            "red";
          // on bloque l'input
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
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case36' à 'case42' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 36; i < 43; i++) {
  document.querySelector("#case" + i).addEventListener("input", () => {
    let word = "";
    for (let j = 36; j < 43; j++) {
      word += document.querySelector("#case" + j).value;
    }
    if (word.length === 7) {
      console.log(word);
      // on transforme le mot en tableau de lettres
      let wordArray = word.split("");
      // on console log les tableaux pour voir si ça marche
      console.log(wordArray);
      console.log(wordToGuessArray);
      // On bloque les inputs de la case 36 à la case 42
      for (let i = 36; i < 43; i++) {
        document.getElementById("case" + i).disabled = true;
      }
      // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
      if (word === wordToGuess) {
        alert("Bravo, vous avez trouvé le mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // sinon si le mot entré est différent du mot à trouver, on affiche un message d'erreur
      else {
        alert("Ce n'est pas le bon mot !");
        setGameStart(false);
        isGameStart(gameStart);
      }
      // on compare les tableaux
      // pour chaque lettre du mot à trouver, on compare avec chaque lettre du mot entré
      // si la lettre du mot à trouver est dans le mot entré et est à la même position, on colorie la case en red
      // si la lettre du mot à trouver est dans le mot entré mais pas à la même position, on colorie la case en orange
      // si la lettre du mot à trouver n'est pas dans le mot entré, on colorie la case en bleu
      for (let k = 0; k < wordToGuessArray.length; k++) {
        if (wordToGuessArray[k] === wordArray[k]) {
          document.querySelector("#case" + (k + 36)).style.backgroundColor =
            "red";
          // on replace ces lettres sur la septième ligne
          document.querySelector("#case" + (k + 43)).value = wordArray[k];
          // on colorie la case en red
          document.querySelector("#case" + (k + 43)).style.backgroundColor =
            "red";
          // on bloque l'input
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
}