export const gameStart = () => {
    document.querySelector(".container").classList.remove("hide");
    document.querySelector("h2").classList.add("hide");
    document.querySelectorAll("li").forEach(function(el) {
        el.classList.add("hide");
    });
}
export const gameStop = () => {
    document.querySelector(".container").classList.add("hide");
    document.querySelector("h2").classList.remove("hide");
    document.querySelectorAll("li").forEach(function(el) {
        el.classList.remove("hide");
    });
}