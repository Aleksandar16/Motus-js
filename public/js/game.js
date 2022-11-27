export const game = (wordToGuess, lengthWord) => {
    console.log(wordToGuess);
    let wordToGuessArray = wordToGuess.split("");
    
    // on ajoute aux inputs un listener qui vérifie que chaque input ne contient qu'une seule lettre et bloque la saisie si ce n'est pas le cas
    for (let i = 1; i < lengthWord + 1; i++) {
        document.getElementById("case" + i).addEventListener("input", function () {
          if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
          }
        });
      }
      
      // on ajoute aux inputs un listener qui lowercase la lettre saisie
      for (let i = 1; i < lengthWord + 1; i++) {
        document.getElementById("case" + i).addEventListener("input", function () {
          this.value = this.value.toLowerCase();
        });
      }
      
      // on bloque tous les inputs de la case 8 à la case 42
      for (let i = (lengthWord + 1); i < ((lengthWord * 6) + 1); i++) {
        document.getElementById("case" + i).disabled = true;
      }

      // première ligne
// on ajoute un listener qui quand un input est rempli, récupère la valeur de l'input allant de l'id 'case1' à 'case7' et on forme un mot avec les lettres entrées et on le console.log à la fin une fois que chaque input est rempli
for (let i = 1; i < lengthWord + 1; i++) {
    document.querySelector("#case" + i).addEventListener("input", () => {
      let word = "";
      for (let j = 1; j < lengthWord + 1; j++) {
        word += document.querySelector("#case" + j).value;
      }
      if (word.length === lengthWord) {
        console.log(word);
        // on transforme le mot en tableau de lettres
        let wordArray = word.split("");
        // on console log les tableaux pour voir si ça marche
        console.log(wordArray);
        console.log(wordToGuessArray);
        // On bloque les inputs de la première ligne
        for (let i = 1; i < lengthWord + 1; i++) {
          document.getElementById("case" + i).disabled = true;
        }
        // On débloque les inputs de la deuxième ligne
        for (let i = (lengthWord + 1); i < ((lengthWord * 2) + 1); i++) {
          document.getElementById("case" + i).disabled = false;
        }
        // si le mot entré est le même que le mot à trouver, on affiche un message de victoire
        if (word === wordToGuess) {
          alert("Bravo, vous avez trouvé le mot !");
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
}
