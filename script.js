/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING
===================================================== */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* =====================================================
   PLAY BUTTON
===================================================== */

const playButton = document.getElementById("playButton");
const missionPlay = document.getElementById("missionPlay");

function startGame() {

    /*
        Replace this later with the actual game page.

        Example:

        window.location.href = "game.html";
    */

    alert("The investigation is about to begin...\n\nGame page coming soon!");
}

playButton.addEventListener("click", startGame);
missionPlay.addEventListener("click", startGame);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10, 9, 7, 0.98)";

    } else {

        navbar.style.background = "rgba(14, 13, 11, 0.95)";

    }

});
