// Lisää kaikki kuvat dynaamisesti galleriaan
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const totalImages = 211; // Kuvien kokonaismäärä
    const imagePath = "drive-download-20241122T203915Z-001/"; // Kuvien polku
    let imageCounter = 1;  // Laskuri, joka seuraa näkyvien kuvien määrää

    // Esiasetettujen tekstien taulukko
    const imageTexts = {
        1: "",
        2: "EAN 6430082010163",
        3: "",
        4: "EAN 6430082010057",
        5: "EAN 6430082010118",
        6: "EAN 6430082010224",
        7: "EAN 6430082010170",
        8: "EAN 6430082010064",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "EAN 6430082010149",
        15: "",
        16: "",
        17: "EAN 6430082010071",
        18: "",
        19: "",
        20: "",
        21: "EAN 430082010217",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "EAN 6430082010088",
        28: "",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "EAN 6430082010538",
        42: "EAN 6430082010033",
        43: "EAN 6430082010248",
        44: "",
        45: "",
        46: "",
        47: "EAN 6430082010026",
        48: "EAN 6430082010101",
        49: "EAN 6430082010156",
        50: "",
        51: "EAN 6430082010477",
        52: "EAN 6430082010125",
        53: "EAN 6430082010521",
        54: "EAN 6430082010576",
        55: "EAN 6430082010545",
        56: "EAN 6430082010552",
        57: "EAN 6430082010569",
        58: "EAN 6430082010491",
        59: "",
        60: "EAN 6430082010507",
        61: "",
        62: "EAN 6430082010583",
        63: "EAN 6430082010361",
        64: "EAN 6430082010439",
        65: "EAN 6430082010415",
        66: "EAN 6430082010453",
        67: "EAN 6430082010460",
        68: "EAN 6430082010484",
        69: "EAN 643008201446",
        70: "EAN 6430082010422",
        71: "EAN 6430082010408",
        72: "EAN 6430082010187",
        73: "EAN 6430082010392",
        74: "EAN 6430082010378",
        75: "EAN 6430082010354",
        76: "EAN 6430082010385",
        77: "",
        78: "",
        79: "",
        80: "",
        81: "",
        82: "",
        83: "",
        84: "",
        85: "EAN 6430082010132",
        86: "",
        87: "",
        88: "",
        89: "",
        90: "",
        91: "",
        92: "",
        93: "",
        94: "",
        95: "",
        96: "6",
        97: "",
        98: "",
        99: "",
        100: "",
        101: "",
        102: "",
        103: "EAN 6430082010095",
        104: "",
        105: "",
        106: "",
        107: "",
        108: "",
        109: "",
        110: "",
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
