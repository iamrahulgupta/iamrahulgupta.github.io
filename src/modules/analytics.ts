/* ======================================================
   GOOGLE ANALYTICS EVENT TRACKING
====================================================== */

function trackEvent(eventName: string, label: string): void {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      event_category: "engagement",
      event_label: label
    });
  }
}

export function initAnalyticsTracking(): void {
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
}
