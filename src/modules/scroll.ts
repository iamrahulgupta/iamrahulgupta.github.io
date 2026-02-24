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
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar") as HTMLElement | null;
    if (!nav) return;

    nav.style.padding = window.scrollY > 40
      ? "12px 40px"
      : "18px 40px";
  });
}
