/* ======================================================
   MAIN ENTRY POINT
   Initializes all modules
====================================================== */

import { initThemeToggle } from "./modules/theme.js";
import { initScrollAnimations, initNavbarShrinkOnScroll } from "./modules/scroll.js";
import { initAnalyticsTracking } from "./modules/analytics.js";
import { initNavigation } from "./modules/navigation.js";
import { initLastUpdatedTimestamp } from "./modules/timestamp.js";

// Initialize all modules when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initScrollAnimations();
  initNavbarShrinkOnScroll();
  initAnalyticsTracking();
  initNavigation();
  initLastUpdatedTimestamp();
});