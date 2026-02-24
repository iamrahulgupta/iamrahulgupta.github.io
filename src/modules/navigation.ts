/* ======================================================
   NAVIGATION: ACTIVE LINK & SMOOTH SCROLL
====================================================== */

const headerOffset = 80;

export function initNavigation(): void {
  initNavActiveLink();
  initSmoothScroll();
}

function initNavActiveLink(): void {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));
}

function initSmoothScroll(): void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href")?.substring(1);
      const targetSection = document.getElementById(targetId!);

      if (!targetSection) return;

      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
}
