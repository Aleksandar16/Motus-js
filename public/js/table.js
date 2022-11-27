import { game } from "./game.js";
import { randomWord } from "./wording.js";
import { wordlist } from "./wordlist.js";

export const generateTable = (difficulty) => {
    if(difficulty == "easy") {
        const lengthEasy = Math.floor(Math.random() * (4 - 3 + 1) + 3)
        let wordToGuess = randomWord(wordlist, lengthEasy);
        let tbl = document.createElement('table');
        let k = 0;
        for (let i = 0; i < 6; i++) {
            const tr = tbl.insertRow();
            tr.setAttribute("id", "colonne" + (i + 1));
            for (let j = 0; j < lengthEasy; j++) {
                k = k + 1;
                const td = tr.insertCell();
                var input = document.createElement('input');
                input.type = "text";
                input.setAttribute("id", "case" + k);
                input.setAttribute("minLength", 1);
                input.setAttribute("maxLength", 1);
                td.appendChild(input);
                td.classList.add("field");
            }
          }
        document.querySelector(".container").appendChild(tbl);
        document.querySelector(".container").innerHTML += `br`;
        game(wordToGuess, lengthEasy);
    }         

    if(difficulty == "medium") {
        const lengthMedium = Math.floor(Math.random() * (6 - 5 + 1) + 5)
        let wordToGuess = randomWord(wordlist, lengthMedium);
        let tbl = document.createElement('table');
        let k = 0;
        for (let i = 0; i < 6; i++) {
            const tr = tbl.insertRow();
            tr.setAttribute("id", "colonne" + (i + 1));
            for (let j = 0; j < lengthMedium; j++) {
                k = k + 1;
                const td = tr.insertCell();
                var input = document.createElement('input');
                input.type = "text";
                input.setAttribute("id", "case" + k);
                input.setAttribute("minLength", 1);
                input.setAttribute("maxLength", 1);
                td.appendChild(input);
                td.classList.add("field");
            }
          }
        document.querySelector(".container").appendChild(tbl);
        document.querySelector(".container").innerHTML += `br`;
        game(wordToGuess, lengthMedium);
    }

    if(difficulty == "hard") {
        const lengthHard = Math.floor(Math.random() * (8 - 7 + 1) + 7)
        let wordToGuess = randomWord(wordlist, lengthHard);
        let tbl = document.createElement('table');
        let k = 0;
        for (let i = 0; i < 6; i++) {
            const tr = tbl.insertRow();
            tr.setAttribute("id", "colonne" + (i + 1));
            for (let j = 0; j < lengthHard; j++) {
                k = k + 1;
                const td = tr.insertCell();
                var input = document.createElement('input');
                input.type = "text";
                input.setAttribute("id", "case" + k);
                input.setAttribute("minLength", 1);
                input.setAttribute("maxLength", 1);
                td.appendChild(input);
                td.classList.add("field");
            }
          }
        document.querySelector(".container").appendChild(tbl);
        document.querySelector(".container").innerHTML += `br`;
        game(wordToGuess, lengthHard);
    }
}

export const deleteTable = () => {
    document.querySelector(".container").innerHTML = ``
}
