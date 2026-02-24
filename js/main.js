var _a, _b, _c, _d;
const toggleBtn = document.querySelector("#theme-toggle");
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});
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
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav)
        return;
    nav.style.padding = window.scrollY > 40
        ? "12px 40px"
        : "18px 40px";
});
const lastUpdatedEl = document.querySelector(".last-updated");
if (lastUpdatedEl) {
    const date = new Date(document.lastModified);
    lastUpdatedEl.textContent =
        "Last updated: " + date.toLocaleDateString();
}
function trackEvent(eventName, label) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, {
            event_category: "engagement",
            event_label: label
        });
    }
}
(_a = document.querySelector(".resume-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    trackEvent("resume_click", "ATS Resume");
});
(_b = document.querySelector('a[href*="github.com"]')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    trackEvent("github_click", "GitHub");
});
(_c = document.querySelector('a[href*="linkedin.com"]')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    trackEvent("linkedin_click", "LinkedIn");
});
(_d = document.querySelector('a[href^="mailto:"]')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    trackEvent("email_click", "Email");
});
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (!(section instanceof HTMLElement))
            return;
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
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
export {};
