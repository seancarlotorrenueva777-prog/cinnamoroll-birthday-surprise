/* =====================================================================
   PERSONALIZE THIS SECTION
   Change the name and the four letter messages below.
   No build tools or database are needed.
   ===================================================================== */
const BIRTHDAY = {
  celebrantName: "Birthday Star", // Replace with the celebrant's name.
  signature: "with lots of love, ♡", // Change who the letters are from.
  letters: [
    {
      kicker: "A NOTE FROM THE CLOUDS",
      title: "A little note for you",
      stamp: "♡",
      body: "Happy birthday to someone who makes ordinary days feel a little brighter. I hope today reminds you how loved, appreciated, and special you are.\n\nKeep being soft-hearted, wonderfully yourself, and unapologetically you. You deserve all the sweet things life has waiting.\n\nMay this new chapter bring you peaceful days, loud laughter, beautiful surprises, and memories you will keep forever.",
      signoff: "always cheering for you, ♡"
    },
    {
      kicker: "ROUND START — YOUR DAY",
      title: "Main character energy",
      stamp: "✦",
      body: "May your aim be steady, your teammates be kind, and your rank-ups be endless. Whether it is a clean Valorant clutch or a perfect Mobile Legends play, I hope you keep finding reasons to celebrate every little win.\n\nAnd when a round does not go your way, remember: one game never defines you. Reset, breathe, and queue again. You are the main character, after all.",
      signoff: "GLHF, birthday MVP! ♡"
    },
    {
      kicker: "LEGENDARY BIRTHDAY DROP",
      title: "Legendary you",
      stamp: "★",
      body: "Wishing you a year filled with epic moments, supportive allies, and happy little victories. May your days have the best kind of plot twists, your adventures unlock new levels, and your energy bar always recharge.\n\nYou do not need an MVP badge to be amazing. You already bring your own kind of magic to the team. Keep shining, legend!",
      signoff: "your biggest fan, ♡"
    },
    {
      kicker: "A VERY CUTE LAB REPORT",
      title: "The perfect reaction",
      stamp: "⚗",
      body: "Today's experiment: combine 1 birthday star, a little sparkle, unlimited kindness, and a whole lot of dreams. Add laughter, mix gently, and let the good moments react.\n\nThe result? One extraordinary person with a formula that cannot be replicated. May your happiness stay stable, your worries evaporate, and your future be full of exciting discoveries.\n\nYou are, scientifically speaking, one in a million.",
      signoff: "with chemical-level affection, ♡"
    }
  ]
};

const homePage = document.getElementById("home");
const lettersPage = document.getElementById("letters");
const candle = document.getElementById("candle");
const lightCandleButton = document.getElementById("lightCandleButton");
const wishHint = document.getElementById("wishHint");
const letterOverlay = document.getElementById("letterOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalStamp = document.getElementById("modalStamp");
const modalBody = document.getElementById("modalBody");
const modalSignoff = document.getElementById("modalSignoff");
const modalCounter = document.getElementById("modalCounter");
const prevLetterButton = document.getElementById("prevLetterButton");
const nextLetterButton = document.getElementById("nextLetterButton");
const toast = document.getElementById("toast");

let currentLetter = 0;
let lastFocusedElement = null;
let toastTimer;

// Personalize the visible birthday name and the signature.
document.querySelectorAll("[data-celebrant]").forEach((element) => {
  element.textContent = BIRTHDAY.celebrantName;
});

function showPage(pageName) {
  const showLetters = pageName === "letters";
  homePage.hidden = showLetters;
  lettersPage.hidden = !showLetters;
  homePage.classList.toggle("is-active", !showLetters);
  lettersPage.classList.toggle("is-active", showLetters);
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function lightCandle() {
  if (candle.classList.contains("candle-lit")) {
    burstConfetti(14);
    showToast("Your wish is floating up to the clouds. ♡");
    return;
  }
  candle.classList.add("candle-lit");
  lightCandleButton.innerHTML = '<span class="button-icon">♡</span> Make a beautiful wish';
  wishHint.textContent = "Your little light is shining. Keep that wish close. ♡";
  burstConfetti(26);
  showToast("The birthday candle is glowing just for you! ✨");
}

function burstConfetti(amount = 18) {
  const colors = ["#f3a9c6", "#a8d4f4", "#f4d38d", "#c8b5e8", "#ffffff"];
  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${42 + Math.random() * 16}%`;
    piece.style.top = `${42 + Math.random() * 10}%`;
    piece.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 260)}px`);
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    piece.style.animationDuration = `${1 + Math.random() * 0.8}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 2200);
  }
}

function openLetter(index) {
  if (!Number.isInteger(index) || index < 0 || index >= BIRTHDAY.letters.length) return;
  currentLetter = index;
  lastFocusedElement = document.activeElement;
  renderLetter();
  letterOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("closeLetterButton").focus();
}

function renderLetter() {
  const letter = BIRTHDAY.letters[currentLetter];
  modalKicker.textContent = letter.kicker;
  modalTitle.textContent = letter.title;
  modalStamp.textContent = letter.stamp;
  modalBody.textContent = letter.body;
  modalSignoff.textContent = letter.signoff || BIRTHDAY.signature;
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
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// Candle can be activated by mouse, touch, Enter, or Space.
lightCandleButton.addEventListener("click", lightCandle);
candle.addEventListener("click", lightCandle);
candle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    lightCandle();
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

// Small ambient sparkle details. Kept lightweight and decorative.
const sparkleField = document.getElementById("sparkleField");
const sparkleSymbols = ["✦", "✧", "·", "♡"];
for (let i = 0; i < 24; i += 1) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = sparkleSymbols[i % sparkleSymbols.length];
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.fontSize = `${8 + Math.random() * 12}px`;
  sparkle.style.animationDelay = `${Math.random() * 4}s`;
  sparkle.style.animationDuration = `${2.5 + Math.random() * 3}s`;
  sparkleField.appendChild(sparkle);
}

// The candle gently lights itself as the birthday page opens.
window.setTimeout(() => {
  candle.classList.add("candle-lit");
  lightCandleButton.innerHTML = '<span class="button-icon">♡</span> Make a wish';
  wishHint.textContent = "A little flame is shining just for you. Make a wish. ♡";
}, 750);
