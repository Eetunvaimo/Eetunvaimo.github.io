// Lisää kaikki kuvat dynaamisesti galleriaan
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const totalImages = 210; // Kuvien kokonaismäärä
    const imagePath = "drive-download-20241122T203915Z-001/"; // Kuvien polku
    let imageCounter = 1;  // Laskuri, joka seuraa näkyvien kuvien määrää

    // Esiasetettujen tekstien taulukko
    const imageTexts = {
        1: "Tämä on kuva 1",
        2: "Tämä on kuva 2",
        3: "Tämä on kuva 3",
        4: "Tämä on kuva 4",
        5: "Tämä on kuva 5",
        6: "Tämä on kuva 6",
        7: "Tämä on kuva 7",
        8: "Tämä on kuva 8",
        9: "Tämä on kuva 9",
        10: "Tämä on kuva 10",
        11: "Tämä on kuva 11",
        12: "Tämä on kuva 12",
        13: "Tämä on kuva 13",
        14: "Tämä on kuva 14",
        15: "Tämä on kuva 15",
        16: "Tämä on kuva 16",
        17: "Tämä on kuva 17",
        18: "Tämä on kuva 18",
        19: "Tämä on kuva 19",
        20: "Tämä on kuva 20",
        21: "Tämä on kuva 21",
        22: "Tämä on kuva 22",
        23: "Tämä on kuva 23",
        24: "Tämä on kuva 24",
        25: "Tämä on kuva 25",
        26: "Tämä on kuva 26",
        27: "Tämä on kuva 27",
        28: "Tämä on kuva 28",
        29: "Tämä on kuva 29",
        30: "Tämä on kuva 30",
        31: "Tämä on kuva 31",
        32: "Tämä on kuva 32",
        33: "Tämä on kuva 33",
        34: "Tämä on kuva 34",
        35: "Tämä on kuva 35",
        36: "Tämä on kuva 36",
        37: "Tämä on kuva 37",
        38: "Tämä on kuva 38",
        39: "Tämä on kuva 39",
        40: "Tämä on kuva 40",
        41: "Tämä on kuva 41",
        42: "Tämä on kuva 42",
        43: "Tämä on kuva 43",
        44: "Tämä on kuva 44",
        45: "Tämä on kuva 45",
        46: "Tämä on kuva 46",
        47: "Tämä on kuva 47",
        48: "Tämä on kuva 48",
        49: "Tämä on kuva 49",
        50: "Tämä on kuva 50",
        51: "Tämä on kuva 51",
        52: "Tämä on kuva 52",
        53: "Tämä on kuva 53",
        54: "Tämä on kuva 54",
        55: "Tämä on kuva 55",
        56: "Tämä on kuva 56",
        57: "Tämä on kuva 57",
        58: "Tämä on kuva 58",
        59: "Tämä on kuva 59",
        60: "Tämä on kuva 60",
        61: "Tämä on kuva 61",
        62: "Tämä on kuva 62",
        63: "Tämä on kuva 63",
        64: "Tämä on kuva 64",
        65: "Tämä on kuva 65",
        66: "Tämä on kuva 66",
        67: "Tämä on kuva 67",
        68: "Tämä on kuva 68",
        69: "Tämä on kuva 69",
        70: "Tämä on kuva 70",
        71: "Tämä on kuva 71",
        72: "Tämä on kuva 72",
        73: "Tämä on kuva 73",
        74: "Tämä on kuva 74",
        75: "Tämä on kuva 75",
        76: "Tämä on kuva 76",
        77: "Tämä on kuva 77",
        78: "Tämä on kuva 78",
        79: "Tämä on kuva 79",
        80: "Tämä on kuva 80",
        81: "Tämä on kuva 81",
        82: "Tämä on kuva 82",
        83: "Tämä on kuva 83",
        84: "Tämä on kuva 84",
        85: "Tämä on kuva 85",
        86: "Tämä on kuva 86",
        87: "Tämä on kuva 87",
        88: "Tämä on kuva 88",
        89: "Tämä on kuva 89",
        90: "Tämä on kuva 90",
        91: "Tämä on kuva 91",
        92: "Tämä on kuva 92",
        93: "Tämä on kuva 93",
        94: "Tämä on kuva 94",
        95: "Tämä on kuva 95",
        96: "Tämä on kuva 96",
        97: "Tämä on kuva 97",
        98: "Tämä on kuva 98",
        99: "Tämä on kuva 99",
        100: "Tämä on kuva 100",
        101: "Tämä on kuva 101",
        102: "Tämä on kuva 102",
        103: "Tämä on kuva 103",
        104: "Tämä on kuva 104",
        105: "Tämä on kuva 105",
        106: "Tämä on kuva 106",
        107: "Tämä on kuva 107",
        108: "Tämä on kuva 108",
        109: "Tämä on kuva 109",
        110: "Tämä on kuva 110",
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
