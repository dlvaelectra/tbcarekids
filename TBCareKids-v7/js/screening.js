const checklist = document.getElementById("tb-checklist");
if (checklist) {
  const countLabel = document.getElementById("answered-count");
  const progressFill = document.getElementById("progress-fill");
  const guidance = document.getElementById("screening-guidance");
  const total = new Set([...checklist.querySelectorAll("input[type=radio]")].map(input => input.name)).size;

  function updateProgress() {
    let answered = 0;
    for (let i = 1; i <= total; i++) {
      if (checklist.querySelector(`input[name="q${i}"]:checked`)) answered++;
    }
    countLabel.textContent = `${answered}/${total} dijawab`;
    progressFill.style.width = `${(answered / total) * 100}%`;
  }

  checklist.addEventListener("change", updateProgress);
  document.getElementById("show-guidance").addEventListener("click", () => {
    guidance.classList.remove("hidden");
    guidance.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  checklist.addEventListener("reset", () => {
    window.setTimeout(() => {
      updateProgress();
      guidance.classList.add("hidden");
    }, 0);
  });
  updateProgress();
}
