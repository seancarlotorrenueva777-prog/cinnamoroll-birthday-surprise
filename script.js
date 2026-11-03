/* =====================================================================
   MARKLIE'S BIRTHDAY WEBSITE
   All four personal birthday letters are now included.
   ===================================================================== */
const BIRTHDAY = {
  celebrantName: "Marklie",
  signature: "with love, ♡",
  letters: [
    {
      recipient: "Sean",
      kicker: "FROM SEAN • BLUE SKIES & BIG WISHES",
      title: "A birthday note for Marklie",
      stamp: "S",
      theme: "theme-sean",
      body: "Happy Birthday Marklie,\n\nI am very thankful to be your friend that always be there for me, makes me better in someway ( to my emotional and mental state when it comes to relationship ). I hope that our Friendship would last long and I hope all the opportunity that have been gone for too long will be back to you and those opportunity will be better than before, and all the sadness and pain will be converted into a happiness that cannot be last. I wish you always to have a good health and have more friends who will stay by your side. If you need help, I always here for you. Happy Birthday my faggot and enjoy your day!!!",
      signoff: "— Sean"
    },
    {
      recipient: "Stephanie",
      kicker: "FROM STEPHANIE • RED BOWS & POLKA DOTS",
      title: "A birthday note for Marklie",
      stamp: "♡",
      theme: "theme-stephanie",
      body: "Happy Birthday Marklii 🎉🫶🏻🫶🏻\n\nKeep on living. Life may be tough, but we’re here to make your life, alive. Enjoy ur day always be, birthday mo man o hindi. Love ka namin, bee ❤️❤️❤️",
      signoff: "— Stephanie"
    },
    {
      recipient: "Carryl",
      kicker: "FROM CARRYL • VIOLET DREAMS & SILVER CHAINS",
      title: "A birthday note for Marklie",
      stamp: "C",
      theme: "theme-carryl",
      body: "Happy birthday, faggot.\n\nI hope ur special day is filled with happiness, love, peace, and laughter. I’m so grateful to have you as my friend kahit this year lang tau naging close. Thank youuu for all the memories, laughs, and moments we’ve shared. Always remember that u are special and u deserve all the good things in life.\n\nMay life bring you good health, happiness, and wonderful adventures. Enjoy your very special day!! Faggot. Happy birthday. 🎉🎂🥳",
      signoff: "— Carryl"
    },
    {
      recipient: "Nissi",
      kicker: "FROM NISSI • GREEN FIELDS & BUSY LITTLE BEES",
      title: "A birthday note for Marklie",
      stamp: "N",
      theme: "theme-nissi",
      body: "happy birthday my markli,\n\nkelan kaya next away natin? one of the best moments of my life was meeting you, at palagi ako nagpapasalamat kay God dahil don.\n\ni love you to the stars and beyond my twin flame.",
      signoff: "— Nissi"
    }
  ]
};

const homePage = document.getElementById("home");
const lettersPage = document.getElementById("letters");
const candle = document.getElementById("candle");
const lightCandleButton = document.getElementById("lightCandleButton");
const wishHint = document.getElementById("wishHint");
const letterOverlay = document.getElementById("letterOverlay");
const letterModal = document.getElementById("letterModal");
const modalTitle = document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalStamp = document.getElementById("modalStamp");
const modalBody = document.getElementById("modalBody");
const modalSignoff = document.getElementById("modalSignoff");
const modalCounter = document.getElementById("modalCounter");
const modalBottomDecoration = document.getElementById("modalBottomDecoration");
const prevLetterButton = document.getElementById("prevLetterButton");
const nextLetterButton = document.getElementById("nextLetterButton");
const toast = document.getElementById("toast");

let currentLetter = 0;
let lastFocusedElement = null;
let toastTimer = null;

// Personalize the visible birthday name, including the small header label.
document.querySelectorAll("[data-celebrant]").forEach((element) => {
  element.textContent = BIRTHDAY.celebrantName;
});

document.title = `Happy Birthday, ${BIRTHDAY.celebrantName}! ♡`;

function showPage(pageName) {
  const showLetters = pageName === "letters";
  const targetPage = showLetters ? lettersPage : homePage;
  homePage.hidden = showLetters;
  lettersPage.hidden = !showLetters;
  homePage.classList.toggle("is-active", !showLetters);
  lettersPage.classList.toggle("is-active", showLetters);
  targetPage.classList.remove("page-entering");
  // Force a fresh animation when returning to a page.
  void targetPage.offsetWidth;
  targetPage.classList.add("page-entering");
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
}

function updateCandleControls() {
  const isLit = candle.classList.contains("candle-lit");
  candle.setAttribute("aria-label", isLit ? "Blow out birthday candle" : "Light birthday candle again");
  lightCandleButton.querySelector(".button-label").textContent = isLit ? "Make a wish & blow out" : "Light candle again";
  wishHint.textContent = isLit
    ? "Close your eyes, make a wish, then blow out the candle. ♡"
    : "Your wish is on its way. Keep it safe in your heart. ♡";
}

function toggleCandle() {
  const isLit = candle.classList.contains("candle-lit");
  if (isLit) {
    candle.classList.remove("candle-lit");
    candle.classList.add("candle-blown");
    burstConfetti(58);
    showToast("Wish made! Sending it up with a little birthday magic. ✨");
  } else {
    candle.classList.remove("candle-blown");
    candle.classList.add("candle-lit");
    burstConfetti(22);
    showToast("A fresh little flame, just for another wish. ♡");
  }
  updateCandleControls();
}

function burstConfetti(amount = 18) {
  const colors = ["#f3a9c6", "#91c9f4", "#f4d38d", "#bca8e5", "#ffffff", "#9bcf9f"];
  const scene = document.querySelector(".birthday-scene");
  const sceneBounds = scene ? scene.getBoundingClientRect() : null;
  const originX = sceneBounds ? sceneBounds.left + sceneBounds.width * 0.52 : window.innerWidth * 0.5;
  const originY = sceneBounds ? sceneBounds.top + sceneBounds.height * 0.55 : window.innerHeight * 0.5;

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = Math.random() > 0.72 ? "confetti confetti-star" : "confetti";
    piece.textContent = piece.classList.contains("confetti-star") ? "✦" : "";
    piece.style.background = piece.classList.contains("confetti-star") ? "transparent" : colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${originX + (Math.random() - 0.5) * 48}px`;
    piece.style.top = `${originY + (Math.random() - 0.5) * 22}px`;
    piece.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 360)}px`);
    piece.style.setProperty("--fall", `${90 + Math.random() * 210}px`);
    piece.style.animationDelay = `${Math.random() * 0.22}s`;
    piece.style.animationDuration = `${1.2 + Math.random() * 1.1}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 2700);
  }
}

function openLetter(index) {
  if (!Number.isInteger(index) || index < 0 || index >= BIRTHDAY.letters.length) return;
  currentLetter = index;
  lastFocusedElement = document.activeElement;
  renderLetter();
  letterOverlay.hidden = false;
  letterModal.scrollTop = 0;
  document.body.style.overflow = "hidden";
  document.getElementById("closeLetterButton").focus();
}

function renderLetter() {
  const letter = BIRTHDAY.letters[currentLetter];
  const themeClasses = BIRTHDAY.letters.map((item) => item.theme);
  letterModal.classList.remove(...themeClasses);
  letterModal.classList.add(letter.theme);

  modalKicker.textContent = letter.kicker;
  modalTitle.textContent = letter.title;
  modalStamp.textContent = letter.stamp;
  modalBody.textContent = letter.body;
  modalSignoff.textContent = letter.signoff || BIRTHDAY.signature;
  modalBottomDecoration.textContent = currentLetter === 0
    ? "✦　☁　✦　☁　✦"
    : currentLetter === 1
      ? "♥　♡　♥　♡　♥"
      : currentLetter === 2
        ? "⛓　✧　⛓　✧　⛓"
        : "✿　🐝　✿　🐝　✿";
  modalCounter.textContent = `${String(currentLetter + 1).padStart(2, "0")} / ${String(BIRTHDAY.letters.length).padStart(2, "0")}`;
  prevLetterButton.disabled = currentLetter === 0;
  nextLetterButton.disabled = currentLetter === BIRTHDAY.letters.length - 1;
}

function closeLetter() {
  if (letterOverlay.hidden) return;
  letterOverlay.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3000);
}

// The flame starts lit; both the main button and candle itself toggle it on/off.
updateCandleControls();
lightCandleButton.addEventListener("click", toggleCandle);
candle.addEventListener("click", toggleCandle);
candle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleCandle();
  }
});

document.getElementById("openLettersButton").addEventListener("click", () => showPage("letters"));
document.getElementById("scrollCue").addEventListener("click", () => showPage("letters"));
document.querySelectorAll("[data-go-home]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    closeLetter();
    showPage("home");
  });
});

document.querySelectorAll("[data-letter]").forEach((button) => {
  button.addEventListener("click", () => openLetter(Number(button.dataset.letter)));
});
document.getElementById("closeLetterButton").addEventListener("click", closeLetter);
letterOverlay.addEventListener("click", (event) => {
  if (event.target === letterOverlay) closeLetter();
});
prevLetterButton.addEventListener("click", () => {
  if (currentLetter > 0) {
    currentLetter -= 1;
    renderLetter();
  }
});
nextLetterButton.addEventListener("click", () => {
  if (currentLetter < BIRTHDAY.letters.length - 1) {
    currentLetter += 1;
    renderLetter();
  }
});
document.addEventListener("keydown", (event) => {
  if (letterOverlay.hidden) return;
  if (event.key === "Escape") closeLetter();
  if (event.key === "ArrowLeft" && currentLetter > 0) {
    currentLetter -= 1;
    renderLetter();
  }
  if (event.key === "ArrowRight" && currentLetter < BIRTHDAY.letters.length - 1) {
    currentLetter += 1;
    renderLetter();
  }
});

// Small, randomized ambient details for a gentle animated atmosphere.
const sparkleField = document.getElementById("sparkleField");
const sparkleSymbols = ["✦", "✧", "·", "♡", "✷"];
for (let i = 0; i < 42; i += 1) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = sparkleSymbols[i % sparkleSymbols.length];
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.fontSize = `${8 + Math.random() * 14}px`;
  sparkle.style.animationDelay = `${Math.random() * 4}s`;
  sparkle.style.animationDuration = `${2.4 + Math.random() * 3.4}s`;
  sparkleField.appendChild(sparkle);
}
