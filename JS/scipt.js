import { getImagePath } from "./config.js";
const IMAGE_PATH = getImagePath();

const title = document.querySelector("#name");
window.addEventListener("scroll", () => {
    // Calcule le pourcentage de défilement
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // Limiter le pourcentage de scroll entre 0 et 100
    const limitedScroll = Math.min(Math.max(scrollPercentage, 0), 100);
    // Calculer la composante bleue en fonction du pourcentage de scroll
    const blueValue = Math.round(limitedScroll * 2.55);
    // Appliquer la couleur de fond basée sur le pourcentage de scroll
    title.style.color = `rgb(0, 0, ${blueValue})`;
});

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll("nav a");
    let currentImageIndex = 0;
    let images = [];

    // Fonction pour mettre à jour les images et les vidéos avec data-src
    const updateMedia = () => {
        images = Array.from(document.querySelectorAll("img[data-src]"));
        images.forEach((img, index) => {
            let imgPath = IMAGE_PATH + img.getAttribute("data-src");
            img.src = imgPath;
            img.dataset.index = index;

            img.addEventListener("click", () => {
                currentImageIndex = index;
                lightboxImg.src = img.src;
                lightbox.classList.add("show");
            });
        });

        // Mettre à jour les vidéos
        document.querySelectorAll("video[data-src]").forEach((video) => {
            let videoPath = IMAGE_PATH + video.getAttribute("data-src");
            video.src = videoPath;
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
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
                })
                .catch((error) => console.error("Error loading books.html:", error));
        } else if (page === "identity") {
            fetch("./Pages/identity.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
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
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
                })
                .catch((error) => console.error("Error loading about.html:", error));
        } else if (page === "web") {
            fetch("./Pages/web.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
                })
                .catch((error) => console.error("Error loading web.html:", error));
        } else if (page === "communication") {
            fetch("./Pages/communication.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
                })
                .catch((error) => console.error("Error loading communication.html:", error));
        } else if (page === "logo") {
            fetch("./Pages/logo.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
                })
                .catch((error) => console.error("Error loading logo.html:", error));
        } else if (page === "motion") {
            fetch("./Pages/motion.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                    updateMedia(); // Mettre à jour les images et vidéos
                    resizeText();
                })
                .catch((error) => console.error("Error loading motion.html:", error));
        }
    }

    function resizeText() {
        const text = document.querySelector(".fit-text");
        if (!text) return;

        let parentWidth = text.parentElement.clientWidth;
        let fontSize = Math.min((parentWidth / text.textContent.length) * 1.5, 200); // Ajustement dynamique
        text.style.fontSize = fontSize + "px";
        text.style.whiteSpace = "nowrap";

        // Si le texte dépasse encore, on réduit progressivement
        while (text.offsetWidth > parentWidth && fontSize > 10) {
            fontSize -= 1;
            text.style.fontSize = fontSize + "px";
        }
    }

    // Écoute le redimensionnement de la fenêtre
    window.addEventListener("resize", resizeText);

    // Écoute le redimensionnement de la fenêtre
    window.addEventListener("resize", resizeText);

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

    // Lightbox
    let lightbox = document.getElementById("lightbox");

    // Si la lightbox n'existe pas, on la crée
    if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.innerHTML = `
            <span class="close"><i class="fa-solid fa-xmark"></i></span>
            <img src="" alt="Image agrandie">
            <span class="prev"><i class="fa-solid fa-arrow-left"></i></span>
            <span class="next"><i class="fa-solid fa-arrow-right"></i></span>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".close");
    const prevBtn = lightbox.querySelector(".prev");
    const nextBtn = lightbox.querySelector(".next");

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
        }
    });

    prevBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
    });

    nextBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
    });

    document.addEventListener("keydown", (e) => {
        if (lightbox.classList.contains("show")) {
            if (e.key === "ArrowLeft") {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                lightboxImg.src = images[currentImageIndex].src;
            } else if (e.key === "ArrowRight") {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                lightboxImg.src = images[currentImageIndex].src;
            } else if (e.key === "Escape") {
                lightbox.classList.remove("show");
            }
        }
    });
});
