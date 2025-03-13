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

    // Fonction pour charger une page
    function loadPage(page) {
        // if (page === "projet") {
        //     // Affiche la liste des projets
        //     content.innerHTML = `
        //         <h2>Mes Projets</h2>
        //         <ul>
        //             <li><a href="#" data-project="projet1">Projet 1</a></li>
        //             <li><a href="#" data-project="projet2">Projet 2</a></li>
        //             <li><a href="#" data-project="projet3">Projet 3</a></li>
        //         </ul>
        //     `;

        //     // Ajoute les événements pour les projets
        //     document.querySelectorAll("ul li a").forEach((link) => {
        //         link.addEventListener("click", (e) => {
        //             e.preventDefault();
        //             const project = link.getAttribute("data-project");
        //             loadProject(project);
        //             content.scrollIntoView({ behavior: "smooth" });
        //         });
        //     });
        // }
        if (page === "test") {
            fetch("../Pages/test.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading test.html:", error));
        } else if (page === "books") {
            fetch("../Pages/books.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading books.html:", error));
        } else if (page === "identity") {
            fetch("../Pages/identity.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading identity.html:", error));
        } else if (page === "home") {
            // Retour à la page d'accueil
            // content.innerHTML = `
            //     <h2>Bienvenue sur mon Portfolio</h2>
            //     <p>Cliquez sur "Projets" pour voir mes réalisations.</p>
            // `;
        } else if (page === "about") {
            fetch("../Pages/about.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading about.html:", error));
        } else if (page === "web") {
            fetch("../Pages/web.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading web.html:", error));
        } else if (page === "communication") {
            fetch("../Pages/communication.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading communication.html:", error));
        } else if (page === "logo") {
            fetch("../Pages/logo.html")
                .then((response) => response.text())
                .then((data) => {
                    content.innerHTML = data;
                    content.scrollIntoView({ behavior: "smooth" });
                })
                .catch((error) => console.error("Error loading logo.html:", error));
        }
    }

    // Fonction pour charger un projet spécifique
    // function loadProject(project) {
    //     content.innerHTML = `<h2>${project}</h2><p>Voici les détails du ${project}.</p>`;
    // }

    // Ajout d'événements sur les liens principaux
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);
            content.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Charger la page d'accueil par défaut
    loadPage("home");
});
