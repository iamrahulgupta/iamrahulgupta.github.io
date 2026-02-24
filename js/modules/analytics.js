function trackEvent(eventName, label) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, {
            event_category: "engagement",
            event_label: label
        });
    }
}
export function initAnalyticsTracking() {
    var _a, _b, _c, _d;
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
}
