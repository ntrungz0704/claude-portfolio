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

function initInfiniteTechTrack() {
  const track = document.querySelector("#techTrack");

  if (!track) return;

  const baseBadges = Array.from(track.querySelectorAll(".tech-badge")).map((badge) =>
    badge.cloneNode(true),
  );

  if (!baseBadges.length) return;

  const buildSequence = () => {
    const sequence = document.createElement("div");
    sequence.className = "tech-sequence";

    let guard = 0;
    do {
      baseBadges.forEach((badge) => sequence.appendChild(badge.cloneNode(true)));
      track.appendChild(sequence);
      guard += 1;
    } while (sequence.scrollWidth < window.innerWidth * 1.35 && guard < 12);

    return sequence;
  };

  const rebuildTrack = () => {
    track.innerHTML = "";
    const firstSequence = buildSequence();
    const loopDistance = firstSequence.scrollWidth;
    const secondSequence = firstSequence.cloneNode(true);

    track.appendChild(secondSequence);
    track.style.setProperty("--tech-loop-distance", `${loopDistance}px`);
    track.style.setProperty("--tech-loop-duration", `${Math.max(22, loopDistance / 42)}s`);
  };

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(rebuildTrack, 150);
  });

  rebuildTrack();
}

initHeroParallax();
initProjectTilt();
initInfiniteTechTrack();
