import { linkName } from "./level.js";
import { isGameStart } from "./game-started.js";

const t = (x) => {
    let a = x;
    const getT = () => a;
    const setT = (b) => a = b;
    return [getT, setT];
}

const [gameStart, setGameStart] = t(false);

[...document.querySelectorAll("button[data-difficulty]")].map(b => {b.addEventListener("click", () => {
    linkName(b.dataset.difficulty, setGameStart, gameStart);
})})

document.querySelector("#forfeit").addEventListener("click", () => {
    setGameStart(false);
    isGameStart(gameStart);
})