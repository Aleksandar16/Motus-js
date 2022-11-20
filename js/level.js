let gameStarted;

export function linkName(link) {
    document.querySelector(".container").style.display = 'block';
    document.querySelectorAll("li").forEach(function(el) {
        el.style.display = 'none';
    });
    const levelName = link;
    gameStarted = true; 
}