export const row = (wordToGuess, lengthWord, rowsColumn, wordToGuessArray) => {
    for(let j = 0; j < lengthWord; j++){
        [rowsColumn].map((b) => {
            console.log(b[j].childNodes[0]);
        })
    }
}