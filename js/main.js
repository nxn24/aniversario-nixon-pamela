
"use strict";

const revealButton = document.querySelector("#revealButton");
const videoSection = document.querySelector("#videoSection");
const anniversaryVideo = document.querySelector("#anniversaryVideo");

revealButton.addEventListener("click", async () => {
  videoSection.hidden = false;
  revealButton.textContent = "💜 Nuestra sorpresa está aquí";

  videoSection.scrollIntoView({
    behavior: window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches ? "auto" : "smooth",
    block: "start"
  });

  try {
    await anniversaryVideo.play();
  } catch {
    // Si el navegador no permite iniciar la reproducción,
    // Pamela podrá pulsar el control de reproducción.
  }
});
