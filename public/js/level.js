import { isGameStart } from "./game-started.js";

export const linkName = (link, setGameStart, gameStart) => {
  setGameStart(true);
  isGameStart(gameStart);
  const onConfirmRefresh = function (event) {
    event.preventDefault();
    return (event.returnValue = "Attention");
  };
  window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
};
