document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const result = document.getElementById("result");

  startBtn.addEventListener("click", () => {
    result.classList.remove("hidden");
    startBtn.textContent = "Continue";
  });
});
