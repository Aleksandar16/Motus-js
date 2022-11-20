if(gameStarted = true) {
    document.querySelector(".container").style.display = 'block';
    document.querySelector("h2").style.display = 'none';
    document.querySelectorAll("li").forEach(function(el) {
        el.style.display = 'none';
    });
}