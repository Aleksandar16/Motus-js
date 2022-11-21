function isGameStart() {
    if(gameStart === true) {
        document.querySelector(".container").style.display = 'block';
        document.querySelector("h2").style.display = 'none';
        document.querySelectorAll("li").forEach(function(el) {
            el.style.display = 'none';
        });
    }
    if(gameStart === false) {
        document.querySelector(".container").style.display = 'none';
        document.querySelector("h2").style.display = 'block';
        document.querySelectorAll("li").forEach(function(el) {
            el.style.display = 'block';
        });
    }
}