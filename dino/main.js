const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump()
});

function jump() {
    if (dino.classList.add != "jupm") {
        (dino.classList.add("jupm"))
    }
    setTimeout(function() {
        dino.classList.remove("jupm")
    }, 400)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 140) {
        alert("Game over")

    }
}, 10)