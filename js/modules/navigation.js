function initNavigation() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 20);
    setActiveNavLink(sections, navLinks);
  });

  toggle?.addEventListener("click", () => {
    mobileNav?.classList.toggle("open");
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });

  setActiveNavLink(sections, navLinks);
}

function setActiveNavLink(sections, navLinks) {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === `#${current}` ? "var(--text-primary)" : "";
  });
}

initNavigation();
