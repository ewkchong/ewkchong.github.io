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

let rows = 6;
let cols = 4;

const addRowButton = document.querySelector('.add-row');
const updateButton = document.querySelector('.external');
const table = document.querySelector('table');
addRowButton.addEventListener("mousedown", () => {
    const el = document.createElement('tr');
    el.innerHTML = `
            <td class="cell"><input type="text" class="cell-input"></td>
            <td class="cell"><input type="text" class="cell-input"></td>
            <td class="cell"><input type="text" class="cell-input"></td>
            <td class="cell"><input type="text" class="cell-input"></td>
          `
   table.appendChild(el); 
})
updateButton.addEventListener("mousedown", () => {
    const el = document.createElement('tr');
    const firstNames = ['Bob', 'Kelly', 'Glenn', 'Victoria'];
    const lastNames = ['Wong', 'Thomas', 'Miller', 'Bench' ];
   el.innerHTML = `
            <td class="cell"><input type="text" class="cell-input" value="${firstNames[Math.floor(Math.random()*4)]}"></td>
            <td class="cell"><input type="text" class="cell-input" value="${lastNames[Math.floor(Math.random()*4)]}"></td>
            <td class="cell"><input type="text" class="cell-input" value="\$${Math.floor(Math.random()*200)}.${Math.floor(Math.random()*99)}"></td>
            <td class="cell"><input type="text" class="cell-input" value="${Math.floor(Math.random()*7)}"></td>
          ` 
    table.appendChild(el);
})

// heroButton.addEventListener("mousedown", () => {
//     navigateTo("article.main-content");
// })