// MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// MUSIC SYSTEM
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");


// ATTEMPT AUTOPLAY
window.addEventListener("load", () => {

    music.volume = 0.5;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            musicBtn.textContent =
            "Play Music 🎵";

        });

    }

});


// BUTTON TOGGLE
musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.textContent =
        "Pause ⏸";

    } else {

        music.pause();

        musicBtn.textContent =
        "Play 🎵";
    }
});