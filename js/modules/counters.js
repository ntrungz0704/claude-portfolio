function initCounters() {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.querySelectorAll("[data-target]").forEach((element) => {
          const target = Number.parseInt(element.dataset.target, 10);
          const suffix = element.dataset.target === "100" ? "%" : "+";

          animateCounter(element, target, suffix);
        });

        statsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(".stats-row").forEach((element) => {
    statsObserver.observe(element);
  });
}

function animateCounter(element, target, suffix = "") {
  let start = 0;
  const duration = 1500;

  function step(timestamp) {
    if (!start) start = timestamp;

    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    element.textContent = Math.floor(eased * target) + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }

    element.textContent = target + suffix;
  }

  requestAnimationFrame(step);
}

initCounters();
