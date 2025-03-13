document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const imageCount = 8; // Nombre d'images dans le dossier

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement("img");
        img.src = `../assets/img/Projet_-_Memoire/PROJ1-${i}.jpg`;
        img.alt = `Image ${i}`;
        img.classList.add("gallery-img");
        gallery.appendChild(img);

        // Ajoute un événement de clic pour afficher l'image en grand
        img.addEventListener("click", () => {
            const popup = document.createElement("div");
            popup.classList.add("popup");
            const popupImg = document.createElement("img");
            popupImg.src = img.src;
            popupImg.alt = img.alt;
            popup.appendChild(popupImg);
            document.body.appendChild(popup);

            // Ferme le popup lorsqu'on clique dessus
            popup.addEventListener("click", () => {
                document.body.removeChild(popup);
            });
        });
    }
});
