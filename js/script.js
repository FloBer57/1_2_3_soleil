const number = document.querySelector(".number"); // Utilisez # pour sélectionner un élément par ID
const body = document.querySelector(".body");
const un = document.querySelector(".un");
const deux = document.querySelector(".deux");
const trois = document.querySelector(".trois");
const soleil = document.querySelector(".soleil");
const lose = document.querySelector(".lose");

// Fonction pour afficher l'élément après un certain délai
function showElementWithDelay(element, delay) {
    setTimeout(() => {
        element.style.opacity = "1";
    }, delay);
}

// Initialisation : cacher tous les éléments
un.style.opacity = "0";
deux.style.opacity = "0";
trois.style.opacity = "0";
soleil.style.opacity = "0";

// Afficher les éléments progressivement avec des délais
showElementWithDelay(un, 0);          // "1" apparaît immédiatement
showElementWithDelay(deux, 3000);       // "2" apparaît après 3 secondes (3000 millisecondes)
showElementWithDelay(trois, 6000);     // "3" apparaît après 6 secondes (6000 millisecondes)
showElementWithDelay(soleil, 9000);   // "soleil" apparaît après 9 secondes (9000 millisecondes)

// Ajouter un événement à l'élément "number" après 9 secondes
setTimeout(() => {
    number.addEventListener('mousemove', () => {
        lose.classList.toggle("change__lose");
    });
}, 9000);