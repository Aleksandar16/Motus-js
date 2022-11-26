import { game } from "./game.js";
import { randomWord } from "./wording.js";
import { wordlist } from "./wordlist.js";

export const generateTable = (difficulty) => {
    if(difficulty == "easy") {
        const lengthEasy = Math.floor(Math.random() * (4 - 3 + 1) + 3)
        let wordToGuess = randomWord(wordlist, lengthEasy);
        let tbl = document.createElement('table');
        for (let i = 0; i < 6; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < lengthEasy; j++) {
                const td = tr.insertCell();
                var input = document.createElement('input');
                input.type = "text";
                td.appendChild(input);
                td.classList.add("field");
            }
          }
        document.querySelector(".container").appendChild(tbl);
    }         

    if(difficulty == "medium") {
        const lengthMedium = Math.floor(Math.random() * (6 - 5 + 1) + 5)
        let wordToGuess = randomWord(wordlist, lengthMedium);
        let tbl = document.createElement('table');
        for (let i = 0; i < 6; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < lengthMedium; j++) {
                const td = tr.insertCell();
                var input = document.createElement('input');
                input.type = "text";
                td.appendChild(input);
                td.classList.add("field");
            }
          }
        document.querySelector(".container").appendChild(tbl);
    }

    if(difficulty == "hard") {
        const lengthHard = Math.floor(Math.random() * (8 - 7 + 1) + 7)
        let wordToGuess = randomWord(wordlist, lengthHard);
        let tbl = document.createElement('table');
        for (let i = 0; i < 6; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < lengthHard; j++) {
                const td = tr.insertCell();
                var input = document.createElement('input');
                input.type = "text";
                td.appendChild(input);
                td.classList.add("field");
            }
          }
        document.querySelector(".container").appendChild(tbl);
    }
}

export const deleteTable = () => {
    document.querySelector(".container").innerHTML = ``
}
