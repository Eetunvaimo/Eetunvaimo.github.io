// Lisää kaikki kuvat dynaamisesti galleriaan
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const totalImages = 210; // Kuvien kokonaismäärä
    const imagePath = "drive-download-20241122T203915Z-001/"; // Kuvien polku
    let imageCounter = 1;  // Laskuri, joka seuraa näkyvien kuvien määrää

    // Esiasetettujen tekstien taulukko
    const imageTexts = {
        1: "Tämä on ensimmäinen kuva",
        2: "Toinen kuva ja sen erityinen teksti",
        3: "Kolmas kuva tässä!",
        // Lisää omat tekstisi tänne
        // Esim: 4: "Kuva 4 oma teksti",
    };

    for (let i = 1; i <= totalImages; i++) {
        // Skippaa kuvat, joiden tunnus on 100-199
        if (i >= 100 && i <= 199) {
            continue;
        }

        // Luo uusi kuvaelementti
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = `${imagePath}${i}.jpg`;
        img.alt = `Kuva ${i}`;
        img.loading = "lazy";  // Lazy loading -kuvat
        img.onclick = () => openLightbox(img.src);

        const caption = document.createElement("div");
        caption.classList.add("caption");
        caption.textContent = `Kuva ${imageCounter}`;  // Käyttää järjestysnumeroa

        // Luo tekstielementti esiasetetulle tekstille
        const customText = document.createElement("div");
        customText.classList.add("custom-text");
        customText.textContent = imageTexts[imageCounter] || ""; // Näytä esiasetettu teksti tai jätä tyhjäksi

        // Lisää elementit galleriaan
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        galleryItem.appendChild(customText); // Lisää esiasetettu teksti kuvan alle
        gallery.appendChild(galleryItem);

        // Päivitetään järjestysnumero seuraavaa kuvaa varten
        imageCounter++;
    }
});

// Lightbox-funktiot
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.style.display = "block";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
