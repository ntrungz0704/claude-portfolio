function initHeroParallax() {
  const heroGlow = document.querySelector(".hero-glow");

  if (!heroGlow) return;

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 30;
    const y = (event.clientY / window.innerHeight - 0.5) * 15;

    heroGlow.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
  });
}

function initProjectTilt() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `translateY(-4px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
      card.style.transformOrigin = "center";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

initHeroParallax();
initProjectTilt();
