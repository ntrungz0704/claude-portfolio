function initCustomCursor() {
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");

  if (!cursor || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
    requestAnimationFrame(animateRing);
  }

  animateRing();

  document.querySelectorAll("a, button, .project-card, .tech-badge").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "rgba(255,255,255,0.5)";
      cursor.style.transform += " scale(0)";
    });

    element.addEventListener("mouseleave", () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(255,255,255,0.3)";
    });
  });
}

initCustomCursor();
