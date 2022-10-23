const heroButton = document.querySelector(".hero-button")

heroButton.addEventListener("mouseenter", () => {
    heroButton.classList.add('hero-button-hover');
}, false);

heroButton.addEventListener("mouseleave", () => {
    heroButton.classList.remove('hero-button-hover');
}, false);