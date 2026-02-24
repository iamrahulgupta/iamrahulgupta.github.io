"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
        toggleBtn.textContent = "☀️";
    }
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        toggleBtn.textContent = isLight ? "☀️" : "🌙";
    });
}
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0.2
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting)
            return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});
const resumeLink = document.getElementById("resume-link");
if (resumeLink) {
    resumeLink.addEventListener("click", () => {
        console.log("Resume clicked - ATS version");
        const currentCount = Number(localStorage.getItem("resumeClicks")) || 0;
        localStorage.setItem("resumeClicks", String(currentCount + 1));
    });
}
const lastUpdatedEl = document.getElementById("last-updated");
if (lastUpdatedEl) {
    fetch("resume/Rahul_Gupta_Resume.pdf", { method: "HEAD" })
        .then((response) => {
        const lastModified = response.headers.get("Last-Modified");
        if (lastModified) {
            const formattedDate = new Date(lastModified).toLocaleDateString();
            lastUpdatedEl.textContent = `Updated: ${formattedDate}`;
        }
        else {
            lastUpdatedEl.textContent = "";
        }
    })
        .catch(() => {
        lastUpdatedEl.textContent = "";
    });
}
