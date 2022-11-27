import { row } from "./rows.js";

export const game = (wordToGuess, lengthWord) => {
    console.log(wordToGuess);
    let wordToGuessArray = wordToGuess.split("");

    for(let i = 1; i < 7; i++){
        let column = document.querySelector("#colonne" + i);
        let rowsColumn = column.getElementsByTagName("td");
        row(wordToGuess, lengthWord, rowsColumn, wordToGuessArray)
    };
}
