/* ======================================================
   THEME TOGGLE
====================================================== */

export function initThemeToggle(): void {
  const toggleBtn = document.querySelector("#theme-toggle");

  toggleBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next!);
    localStorage.setItem("theme", next!);
  });
}
