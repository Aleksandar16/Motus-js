import { wordlist } from './wordlist.js';

// function qui prend en parametre la wordlist et un nombre de lettre
// et qui renvoie un mot au hasard de ce nombre de lettre

export const randomWord = (wordlist, nbLetter) => {
    const word = wordlist.filter(word => word.length === nbLetter);
    const random = Math.floor(Math.random() * word.length);
    return word[random];
}

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// function qui prend en parametre la wordlist et un nombre de lettre
// et qui renvoie un mot au hasard de ce nombre de lettre en fetchant l'api
export const randomWordApi = (wordlist, nbLetter) => {
    const word = wordlist.filter(word => word.length === nbLetter);
    const random = Math.floor(Math.random() * word.length);
    return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word[random], requestOptions)
}