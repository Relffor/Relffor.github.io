const messages = [
    "Biztos vagy benne?",
    "Tényleg biztos??",
    "Egészen biztos vagy?",
    "Pookie, kérlek...",
    "Csak gondold át mégegyszer",
    "Ha nemet mondasz, nagyon szomorú leszek...",
    "Nagyon szomorú leszek...",
    "Nagyon-nagyon-nagyon szomorú leszek...",
    "Jó, rendben, abbahagyom a kérdezgetést...",
    "Csak vicceltem, mondd, hogy igen, kérlek! ❤️"
];

let messageIndex = 0;
let scaleFactor = 1; // Kezdeti zoom érték

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
    // Ellenőrizzük, hogy a gomb nagyobb-e már, mint a kijelző egy bizonyos része
    checkAndZoomOut(yesButton);
}

function checkAndZoomOut(yesButton) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonRect = yesButton.getBoundingClientRect();

    if (buttonRect.width > screenWidth * 0.5 || buttonRect.height > screenHeight * 0.5) {
        scaleFactor *= 0.9; // Kicsit csökkentjük a zoomot (10%-kal)
        document.body.style.transform = `scale(${scaleFactor})`;
        document.body.style.transformOrigin = "center center"; // Középről zoomoljon ki
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
