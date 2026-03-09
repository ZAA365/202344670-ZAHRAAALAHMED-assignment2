// DARK MODE TOGGLE SCRIPT
// Handles switching between light and dark modes
const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
