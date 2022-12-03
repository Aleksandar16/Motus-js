export const randomWord = (wordlist, nbLetter) => {
  const word = wordlist.filter((word) => word.length === nbLetter);
  const random = Math.floor(Math.random() * word.length);
  return word[random];
};

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

export const randomWordApi = (wordlist, nbLetter) => {
  const word = wordlist.filter((word) => word.length === nbLetter);
  const random = Math.floor(Math.random() * word.length);
  return fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + word[random],
    requestOptions
  );
};
