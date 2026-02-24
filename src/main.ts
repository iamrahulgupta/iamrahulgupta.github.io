/* ======================================================
   THEME TOGGLE
====================================================== */

const toggleBtn = document.querySelector("#theme-toggle");

/* old method

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

toggleBtn?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next!);
  localStorage.setItem("theme", next!);
}); */

toggleBtn?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next!);
  localStorage.setItem("theme", next!);
});

/* ======================================================
   SCROLL FADE-IN
====================================================== */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

/* ======================================================
   NAVBAR SHRINK ON SCROLL
====================================================== */

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar") as HTMLElement | null;
  if (!nav) return;

  nav.style.padding = window.scrollY > 40
    ? "12px 40px"
    : "18px 40px";
});

/* ======================================================
   LAST UPDATED TIMESTAMP
====================================================== */

const lastUpdatedEl = document.querySelector(".last-updated");
if (lastUpdatedEl) {
  const date = new Date(document.lastModified);
  lastUpdatedEl.textContent =
    "Last updated: " + date.toLocaleDateString();
}

/* ======================================================
   GOOGLE ANALYTICS EVENT TRACKING
====================================================== */

function trackEvent(eventName: string, label: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      event_category: "engagement",
      event_label: label
    });
  }
}

document.querySelector(".resume-btn")?.addEventListener("click", () => {
  trackEvent("resume_click", "ATS Resume");
});

document.querySelector('a[href*="github.com"]')
  ?.addEventListener("click", () => {
    trackEvent("github_click", "GitHub");
  });

document.querySelector('a[href*="linkedin.com"]')
  ?.addEventListener("click", () => {
    trackEvent("linkedin_click", "LinkedIn");
  });

document.querySelector('a[href^="mailto:"]')
  ?.addEventListener("click", () => {
    trackEvent("email_click", "Email");
  });

/* ======================================================
   NAV ACTIVE LINK (Type-Safe Version)
====================================================== */

const sections = document.querySelectorAll<HTMLElement>("section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (!(section instanceof HTMLElement)) return;
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});