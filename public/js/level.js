var gameStart;

function linkName(link) {
    gameStart = true;
    isGameStart();
    const onConfirmRefresh = function (event) {
        event.preventDefault();
        return event.returnValue = "Attention";
    }
      
    window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
}