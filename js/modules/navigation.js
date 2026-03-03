const headerOffset = 80;
export function initNavigation() {
    initNavActiveLink();
    initSmoothScroll();
    initMobileMenu();
}
function initNavActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const observerOptions = {
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
function initSmoothScroll() {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            var _a;
            e.preventDefault();
            const targetId = (_a = link.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.substring(1);
            const targetSection = document.getElementById(targetId);
            if (!targetSection)
                return;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
}
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (!mobileMenuBtn || !navLinks)
        return;
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuBtn.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
    document.addEventListener("click", (e) => {
        const target = e.target;
        const isClickInsideHeader = mobileMenuBtn.contains(target) || navLinks.contains(target);
        if (!isClickInsideHeader) {
            mobileMenuBtn.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });
}
