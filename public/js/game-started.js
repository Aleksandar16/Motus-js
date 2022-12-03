import { generateTable, deleteTable } from "./table.js";

export const gameStart = (difficulty) => {
    generateTable(difficulty);
    document.querySelector("h2").classList.add("hide");
    document.querySelectorAll("li").forEach(function(el) {
        el.classList.add("hide");
    });
    document.querySelector("#btn").classList.remove("hide");
}
export const gameStop = () => {
    deleteTable();
    document.querySelector("h2").classList.remove("hide");
    document.querySelectorAll("li").forEach(function(el) {
        el.classList.remove("hide");
    });
    document.querySelector("#btn").classList.add("hide");
}