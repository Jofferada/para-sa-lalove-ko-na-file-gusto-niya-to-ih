const questionScreen = document.getElementById("questionScreen");
const messageScreen = document.getElementById("messageScreen");
const buttonZone = document.getElementById("buttonZone");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const backButton = document.getElementById("backButton");

let chaseCount = 0;

function showMessage() {
  questionScreen.classList.remove("is-active");
  messageScreen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showQuestion() {
  messageScreen.classList.remove("is-active");
  questionScreen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveNoButton() {
  const zoneRect = buttonZone.getBoundingClientRect();
  const noRect = noButton.getBoundingClientRect();
  const maxLeft = Math.max(0, zoneRect.width - noRect.width);
  const maxTop = Math.max(0, zoneRect.height - noRect.height);

  const nextLeft = Math.random() * maxLeft;
  const nextTop = Math.random() * maxTop;

  chaseCount += 1;
  noButton.style.left = `${nextLeft}px`;
  noButton.style.top = `${nextTop}px`;
  noButton.classList.remove("is-running");
  void noButton.offsetWidth;
  noButton.classList.add("is-running");

  const scale = Math.min(2.15, 1 + chaseCount * 0.13);
  yesButton.style.transform = `scale(${scale})`;
  yesButton.style.zIndex = "3";
}

yesButton.addEventListener("click", showMessage);
backButton.addEventListener("click", showQuestion);

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });
