// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle") as HTMLButtonElement | null;

if (toggleBtn) {
    const savedTheme: string | null = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", (): void => {
        document.body.classList.toggle("light");

        const isLight: boolean = document.body.classList.contains("light");

        localStorage.setItem("theme", isLight ? "light" : "dark");
        toggleBtn.textContent = isLight ? "☀️" : "🌙";
    });
}

// Scroll Animation (IntersectionObserver)
const faders: NodeListOf<Element> = document.querySelectorAll(".fade-in");

const appearOptions: IntersectionObserverInit = {
    threshold: 0.2
};

const appearOnScroll: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    },
    appearOptions
);

faders.forEach((fader: Element): void => {
    appearOnScroll.observe(fader);
});

// Resume Analytics Tracking
const resumeLink = document.getElementById("resume-link") as HTMLAnchorElement | null;

if (resumeLink) {
    resumeLink.addEventListener("click", (): void => {
        console.log("Resume clicked - ATS version");

        // Simple analytics counter (localStorage based)
        const currentCount: number = Number(localStorage.getItem("resumeClicks")) || 0;
        localStorage.setItem("resumeClicks", String(currentCount + 1));
    });
}

// Dynamic "Last Updated" Timestamp
const lastUpdatedEl = document.getElementById("last-updated") as HTMLSpanElement | null;

if (lastUpdatedEl) {
    fetch("resume/Rahul_Gupta_Resume.pdf", { method: "HEAD" })
        .then((response: Response) => {
            const lastModified: string | null = response.headers.get("Last-Modified");

            if (lastModified) {
                const formattedDate: string = new Date(lastModified).toLocaleDateString();
                lastUpdatedEl.textContent = `Updated: ${formattedDate}`;
            } else {
                lastUpdatedEl.textContent = "";
            }
        })
        .catch(() => {
            lastUpdatedEl.textContent = "";
        });
}