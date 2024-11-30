// Lisää kaikki kuvat dynaamisesti galleriaan
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const totalImages = 211; // Kuvien kokonaismäärä
    const imagePath = "drive-download-20241122T203915Z-001/"; // Kuvien polku
    let imageCounter = 1;  // Laskuri, joka seuraa näkyvien kuvien määrää

    // Esiasetettujen tekstien taulukko
    const imageTexts = {
        1: "Tämä on kuva 1",
        2: "EAN 6430082010163",
        3: "Tämä on kuva 3",
        4: "EAN 6430082010057",
        5: "EAN 6430082010118",
        6: "EAN 6430082010224",
        7: "EAN 6430082010170",
        8: "EAN 6430082010064",
        9: "Tämä on kuva 9",
        10: "Tämä on kuva 10",
        11: "Tämä on kuva 11",
        12: "Tämä on kuva 12",
        13: "Tämä on kuva 13",
        14: "EAN 6430082010149",
        15: "Tämä on kuva 15",
        16: "Tämä on kuva 16",
        17: "EAN 6430082010071",
        18: "Tämä on kuva 18",
        19: "Tämä on kuva 19",
        20: "Tämä on kuva 20",
        21: "EAN 430082010217",
        22: "Tämä on kuva 22",
        23: "Tämä on kuva 23",
        24: "Tämä on kuva 24",
        25: "Tämä on kuva 25",
        26: "Tämä on kuva 26",
        27: "EAN 6430082010088",
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
        41: "EAN 6430082010538",
        42: "EAN 6430082010033",
        43: "EAN 6430082010248",
        44: "Tämä on kuva 44",
        45: "Tämä on kuva 45",
        46: "Tämä on kuva 46",
        47: "EAN 6430082010026",
        48: "EAN 6430082010101",
        49: "EAN 6430082010156",
        50: "Tämä on kuva 50",
        51: "EAN 6430082010477",
        52: "EAN 6430082010125",
        53: "EAN 6430082010521",
        54: "EAN 6430082010576",
        55: "EAN 6430082010545",
        56: "EAN 6430082010552",
        57: "EAN 6430082010569",
        58: "EAN 6430082010491",
        59: "Tämä on kuva 59",
        60: "EAN 6430082010507",
        61: "Tämä on kuva 61",
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
        77: "Tämä on kuva 77",
        78: "Tämä on kuva 78",
        79: "Tämä on kuva 79",
        80: "Tämä on kuva 80",
        81: "Tämä on kuva 81",
        82: "Tämä on kuva 82",
        83: "Tämä on kuva 83",
        84: "Tämä on kuva 84",
        85: "EAN 6430082010132",
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
        103: "EAN 6430082010095",
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
