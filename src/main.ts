/* ======================================================
   MAIN ENTRY POINT
   Initializes all modules with priority order
====================================================== */

import { initThemeToggle } from "./modules/theme.js";
import { initScrollAnimations, initNavbarShrinkOnScroll } from "./modules/scroll.js";
import { initAnalyticsTracking } from "./modules/analytics.js";
import { initNavigation } from "./modules/navigation.js";
import { initLastUpdatedTimestamp } from "./modules/timestamp.js";

// Critical features: initiailize immediately
document.addEventListener("DOMContentLoaded", () => {
  // High priority: Theme and scroll animations
  initThemeToggle();
  initScrollAnimations();
  initNavbarShrinkOnScroll();
  initLastUpdatedTimestamp();

  // Medium priority: Navigation (after layout is stable)
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => initNavigation());
  } else {
    setTimeout(() => initNavigation(), 100);
  }

  // Low priority: Analytics (after page is interactive)
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => initAnalyticsTracking());
  } else {
    setTimeout(() => initAnalyticsTracking(), 500);
  }
});