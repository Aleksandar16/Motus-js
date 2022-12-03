import { linkName } from "./level.js";
import { gameStop } from "./game-started.js";

[...document.querySelectorAll("button[data-difficulty]")].map((b) => {
  b.addEventListener("click", () => {
    linkName(b.dataset.difficulty);
  });
});

document.querySelector("#forfeit").addEventListener("click", () => {
  gameStop();
});