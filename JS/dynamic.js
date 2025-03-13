document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll("nav a");

    // Fonction pour charger une page
    function loadPage(page) {
        fetch(`pages/${page}.html`) // Charge le fichier HTML correspondant
            .then((response) => response.text())
            .then((data) => {
                content.innerHTML = data;
            })
            .catch((error) => {
                content.innerHTML = "<p>Page introuvable.</p>";
            });
    }

    // Ajout d'événements sur les liens
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            const page = link.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Charger la page d'accueil par défaut
    loadPage("home");
});
