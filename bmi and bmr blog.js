const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('clicked');
    nav.classList.toggle('hidden');
    });

    const loadingOverlay = document.getElementById("loading");
    window.addEventListener("load", () => {
    loadingOverlay.style.display = "none";
  });