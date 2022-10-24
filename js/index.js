const heroButton = document.querySelector(".hero-button");
const venture = document.querySelectorAll(".venture-link");
const testing = document.querySelectorAll(".testing-link");
const buildingLinks = document.querySelectorAll(".building-link");

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

for (link of buildingLinks) {
    link.addEventListener("mousedown", () => {
        navigateTo("h1.building-it-out");
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

function updateTable() {
    const el = document.createElement('tr');
    const firstNames = ['Bob', 'Kelly', 'Glenn', 'Victoria'];
    const lastNames = ['Wong', 'Thomas', 'Miller', 'Bench' ];
   el.innerHTML = `
            <td class="fade-item-in cell"><input type="text" class="cell-input" value="${firstNames[Math.floor(Math.random()*firstNames.length)]}"></td>
            <td class="fade-item-in cell"><input type="text" class="cell-input" value="${lastNames[Math.floor(Math.random()*lastNames.length)]}"></td>
            <td class="fade-item-in cell"><input type="text" class="cell-input" value="\$${Math.floor(Math.random()*200)}.${Math.floor(Math.random()*99)}"></td>
            <td class="fade-item-in cell"><input type="text" class="cell-input" value="${Math.floor(Math.random()*7)}"></td>
          ` ;
    el.classList.add("fade-item-in");
    table.appendChild(el);
}
updateButton.addEventListener("mousedown", () => {
    for (i=0; i < Math.random()*4; i++) {
        updateTable();
    }
})

// heroButton.addEventListener("mousedown", () => {
//     navigateTo("article.main-content");
// })