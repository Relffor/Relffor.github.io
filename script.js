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

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
