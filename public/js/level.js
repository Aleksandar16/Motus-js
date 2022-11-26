import { gameStart } from "./game-started.js";

export const linkName = (difficulty) => {
  console.log(difficulty);
  gameStart(difficulty);
  const onConfirmRefresh = function (event) {
    event.preventDefault();
    return (event.returnValue = "Attention");
  };
  window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
};
