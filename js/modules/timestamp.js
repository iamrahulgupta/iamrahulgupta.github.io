export function initLastUpdatedTimestamp() {
    const resumeUpdated = document.getElementById("resume-updated");
    if (resumeUpdated) {
        const now = new Date();
        const options = {
            month: "short",
            year: "numeric"
        };
        resumeUpdated.textContent =
            "Last updated — " +
                now.toLocaleDateString("en-US", options);
    }
}
