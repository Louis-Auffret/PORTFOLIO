const title = document.querySelector("#name");
// const infos = document.querySelector("#infos");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        title.style.color = "blue";
        // infos.style.display = "block";
    } else {
        title.style.color = "black";
        // infos.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll("nav a");

    const isGitHubPages = window.location.hostname.includes("github.io");
    const IMAGE_PATH = isGitHubPages
        ? "/PORTFOLIO/assets/img/" // Pour GitHub Pages
        : "./assets/img/"; // Pour local

    // Fonction pour mettre à jour les images avec data-src
    const updateImages = () => {
        document.querySelectorAll("img[data-src]").forEach((img) => {
            let imgPath = IMAGE_PATH + img.getAttribute("data-src");
            img.src = imgPath;
            console.log("Image mise à jour :", img.src);
        });
    };

    // Fonction pour charger une page
    function loadPage(page) {
        // Charger les pages dynamiquement
        if (page === "books") {
            fetch("./Pages/books.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateImages(); // Mettre à jour les images après avoir chargé la page
                })
                .catch((error) => console.error("Error loading books.html:", error));
        } else if (page === "identity") {
            fetch("./Pages/identity.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateImages(); // Mettre à jour les images après avoir chargé la page
                })
                .catch((error) => console.error("Error loading identity.html:", error));
        } else if (page === "home") {
            // Retour à la page d'accueil
        } else if (page === "about") {
            fetch("./Pages/about.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateImages(); // Mettre à jour les images après avoir chargé la page
                })
                .catch((error) => console.error("Error loading about.html:", error));
        } else if (page === "web") {
            fetch("./Pages/web.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateImages(); // Mettre à jour les images après avoir chargé la page
                })
                .catch((error) => console.error("Error loading web.html:", error));
        } else if (page === "communication") {
            fetch("./Pages/communication.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateImages(); // Mettre à jour les images après avoir chargé la page
                })
                .catch((error) => console.error("Error loading communication.html:", error));
        } else if (page === "logo") {
            fetch("./Pages/logo.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateImages(); // Mettre à jour les images après avoir chargé la page
                })
                .catch((error) => console.error("Error loading logo.html:", error));
        }
    }

    // Ajout d'événements sur les liens principaux
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);
            content.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Écouteur d'événement pour le changement de hash dans l'URL
    window.addEventListener("hashchange", () => {
        loadPage(window.location.hash.substring(1)); // Récupère la page après #
    });

    // Charger la page initiale basée sur l'URL
    loadPage(window.location.hash.substring(1));

    // Charger la page d'accueil par défaut
    // loadPage("home");
});
