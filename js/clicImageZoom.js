document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne toutes les images du carrousel
    const images = document.querySelectorAll(".cardimg");

    // Crée un fond sombre pour afficher l'image en plein écran
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = '<span class="close-modal">&times;</span><img class="modal-content">';
    document.body.appendChild(modal);

    const modalImage = modal.querySelector(".modal-content");
    const closeModal = modal.querySelector(".close-modal");

    // Ajoute un événement de clic sur chaque image
    images.forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = this.src;
        });
    });

    // Ferme le zoom lorsque l'on clique sur la croix ou en dehors de l'image
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
