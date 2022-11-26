import { game } from "./game.js";
import { randomWord } from "./wording.js";
import { wordlist } from "./wordlist.js";

export const generateTable = (difficulty) => {
    if(difficulty == "easy") {
        console.log("facile");
        const lengthEasy = Math.floor(Math.random() * (4 - 3 + 1) + 3)
        console.log(lengthEasy);
        let wordToGuess = randomWord(wordlist, lengthEasy);
        console.log(wordToGuess);
        document.querySelector(".container").innerHTML = `<table>
    <thead></thead>
    <tbody>
      <tr id="colonne1">
        <td class="field">
          <input type="text" id="case1" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case2" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case3" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case4" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case5" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case6" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case7" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne2">
        <td>
          <input type="text" id="case8" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case9" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case10" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case11" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case12" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case13" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case14" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne3">
        <td>
          <input type="text" id="case15" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case16" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case17" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case18" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case19" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case20" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case21" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne4">
        <td>
          <input type="text" id="case22" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case23" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case24" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case25" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case26" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case27" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case28" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne5">
        <td>
          <input type="text" id="case29" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case30" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case31" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case32" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case33" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case34" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case35" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne6">
        <td>
          <input type="text" id="case36" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case37" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case38" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case39" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case40" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case41" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case42" minlength="1" maxlength="1" />
        </td>
      </tr>
    </tbody>
  </table>
  <br>`;
        game(difficulty, wordToGuess);
    }

    if(difficulty == "medium") {
        console.log("moyen");
        const lengthMedium = Math.floor(Math.random() * (6 - 5 + 1) + 5)
        let wordToGuess = randomWord(wordlist, lengthMedium);
        console.log(wordToGuess);
        console.log(lengthMedium);
        document.querySelector(".container").innerHTML = `<table>
    <thead></thead>
    <tbody>
      <tr id="colonne1">
        <td class="field">
          <input type="text" id="case1" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case2" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case3" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case4" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case5" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case6" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case7" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne2">
        <td>
          <input type="text" id="case8" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case9" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case10" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case11" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case12" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case13" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case14" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne3">
        <td>
          <input type="text" id="case15" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case16" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case17" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case18" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case19" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case20" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case21" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne4">
        <td>
          <input type="text" id="case22" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case23" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case24" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case25" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case26" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case27" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case28" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne5">
        <td>
          <input type="text" id="case29" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case30" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case31" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case32" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case33" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case34" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case35" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne6">
        <td>
          <input type="text" id="case36" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case37" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case38" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case39" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case40" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case41" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case42" minlength="1" maxlength="1" />
        </td>
      </tr>
    </tbody>
  </table>
  <br>`;
        game(difficulty, wordToGuess);
    }

    if(difficulty == "hard") {
        console.log("difficile");
        const lengthHard = Math.floor(Math.random() * (8 - 7 + 1) + 7)
        let wordToGuess = randomWord(wordlist, lengthHard);
        console.log(wordToGuess);
        console.log(lengthHard);
        document.querySelector(".container").innerHTML = `<table>
    <thead></thead>
    <tbody>
      <tr id="colonne1">
        <td class="field">
          <input type="text" id="case1" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case2" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case3" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case4" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case5" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case6" minlength="1" maxlength="1" />
        </td>
        <td class="field">
          <input type="text" id="case7" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne2">
        <td>
          <input type="text" id="case8" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case9" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case10" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case11" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case12" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case13" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case14" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne3">
        <td>
          <input type="text" id="case15" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case16" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case17" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case18" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case19" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case20" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case21" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne4">
        <td>
          <input type="text" id="case22" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case23" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case24" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case25" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case26" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case27" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case28" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne5">
        <td>
          <input type="text" id="case29" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case30" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case31" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case32" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case33" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case34" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case35" minlength="1" maxlength="1" />
        </td>
      </tr>
      <tr id="colonne6">
        <td>
          <input type="text" id="case36" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case37" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case38" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case39" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case40" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case41" minlength="1" maxlength="1" />
        </td>
        <td>
          <input type="text" id="case42" minlength="1" maxlength="1" />
        </td>
      </tr>
    </tbody>
  </table>
  <br>`;
        game(difficulty, wordToGuess);
    }
}

export const deleteTable = () => {
    document.querySelector(".container").innerHTML = ``
}