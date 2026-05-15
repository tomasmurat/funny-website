const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

let started = false;

function moveNoButton() {

  if (!started) {
    const rect = noBtn.getBoundingClientRect();

    noBtn.style.position = "fixed";
    noBtn.style.left = rect.left + "px";
    noBtn.style.top = rect.top + "px";

    started = true;
  }

  const padding = 40;

  const minX = padding;
  const minY = padding;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  let currentX = parseFloat(noBtn.style.left);
  let currentY = parseFloat(noBtn.style.top);

  let newX;
  let newY;

  do {
    newX = Math.random() * (maxX - minX) + minX;
    newY = Math.random() * (maxY - minY) + minY;
  } while (
    Math.abs(newX - currentX) < 250 &&
    Math.abs(newY - currentY) < 180
  );

  noBtn.style.transition = "0.08s ease";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function goNextPage() {

  const currentPage = window.location.pathname;

  if (currentPage.includes("index.html")) {
    window.location.href = "you-pay-page.html";
  }

  else if (currentPage.includes("you-pay-page.html")) {
    window.location.href = "happy-page.html";
  }
}

yesBtn.addEventListener("click", goNextPage);
yesBtn.addEventListener("touchend", goNextPage);