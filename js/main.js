import { initThemeToggle } from "./modules/theme.js";
import { initScrollAnimations, initNavbarShrinkOnScroll } from "./modules/scroll.js";
import { initAnalyticsTracking } from "./modules/analytics.js";
import { initNavigation } from "./modules/navigation.js";
import { initLastUpdatedTimestamp } from "./modules/timestamp.js";
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initScrollAnimations();
    initNavbarShrinkOnScroll();
    initLastUpdatedTimestamp();
    if ("requestIdleCallback" in window) {
        requestIdleCallback(() => initNavigation());
    }
    else {
        setTimeout(() => initNavigation(), 100);
    }
    if ("requestIdleCallback" in window) {
        requestIdleCallback(() => initAnalyticsTracking());
    }
    else {
        setTimeout(() => initAnalyticsTracking(), 500);
    }
});
