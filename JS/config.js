const isGitHubPages = window.location.hostname.includes("github.io");

const IMAGE_PATH = isGitHubPages
    ? "/PORTFOLIO/assets/img/" // Pour GitHub Pages
    : "./assets/img/"; // Pour environnement local

// Sélectionne toutes les images avec l'attribut data-src
document.querySelectorAll("img[data-src]").forEach((img) => {
    img.src = IMAGE_PATH + img.getAttribute("data-src");
});
