import { gameStart } from "./game-started.js";

export const linkName = (difficulty) => {
  gameStart();
  const onConfirmRefresh = function (event) {
    event.preventDefault();
    return (event.returnValue = "Attention");
  };
  window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
  document.querySelector("#case1").setAttribute('autofocus', 'autofocus');
};
