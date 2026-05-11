// MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// MUSIC SYSTEM
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

// ATTEMPT AUTOPLAY
window.addEventListener("load", () => {

    music.volume = 0.5;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise.then(() => {
            isPlaying = true;
        }).catch(() => {
            isPlaying = false;
        });

    }

});

// FALLBACK: Play on first user interaction
document.addEventListener("click", () => {
    if (!isPlaying && music.paused) {
        music.play().then(() => {
            isPlaying = true;
        }).catch(() => {
            console.log("Autoplay blocked by browser");
        });
    }
}, { once: true });

// BUTTON TOGGLE
musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        isPlaying = true;

    } else {

        music.pause();
        isPlaying = false;
    }
});