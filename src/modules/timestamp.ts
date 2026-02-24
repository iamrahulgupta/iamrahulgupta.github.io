/* ======================================================
   LAST UPDATED TIMESTAMP
====================================================== */

export function initLastUpdatedTimestamp(): void {
  /* const lastUpdatedEl = document.querySelector(".last-updated");
  if (lastUpdatedEl) {
    const date = new Date(document.lastModified);
    lastUpdatedEl.textContent =
      "Last updated: " + date.toLocaleDateString();
  }*/

  const resumeUpdated = document.getElementById("resume-updated");

  if (resumeUpdated) {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric"
  };

  resumeUpdated.textContent =
      "Last updated — " +
      now.toLocaleDateString("en-US", options);
  }
}
