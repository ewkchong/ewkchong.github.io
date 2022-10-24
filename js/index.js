const heroButton = document.querySelector(".hero-button");
const venture = document.querySelectorAll(".venture-link");
const testing = document.querySelectorAll(".testing-link");

function navigateTo(query) {
    const el = document.querySelector(query);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
};

heroButton.addEventListener("mouseenter", () => {
    heroButton.classList.add('hero-button-hover');
}, false);

heroButton.addEventListener("mouseleave", () => {
    heroButton.classList.remove('hero-button-hover');
}, false);

for (link of venture) {
    link.addEventListener("mousedown", () => {
        navigateTo("article.venturing")
    })
}

for (link of testing) {
    link.addEventListener("mousedown", () => {
        navigateTo("article.testing")
    })
}

// heroButton.addEventListener("mousedown", () => {
//     navigateTo("article.main-content");
// })