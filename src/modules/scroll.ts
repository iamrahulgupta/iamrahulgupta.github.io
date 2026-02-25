/* ======================================================
   SCROLL FADE-IN & NAVBAR SHRINK
====================================================== */

export function initScrollAnimations(): void {
  // Fade-in on scroll
  const sectionRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => {
    sectionRevealObserver.observe(el);
  });
}

export function initNavbarShrinkOnScroll(): void {
  let lastScrollY = 0;
  let ticking = false;
  
  const updateNavbarPadding = () => {
    const nav = document.querySelector(".site-header") as HTMLElement | null;
    if (!nav) return;
    nav.style.padding = lastScrollY > 40 ? "12px 40px" : "18px 40px";
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateNavbarPadding);
      ticking = true;
    }
  }, { passive: true });
}
