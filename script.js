// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Tips Toggle
const toggleTips = document.getElementById("toggleTips");
const tipsList = document.getElementById("tipsList");

toggleTips.addEventListener("click", () => {
  const isVisible = tipsList.style.display === "block";
  tipsList.style.display = isVisible ? "none" : "block";
  toggleTips.textContent = isVisible ? "Show Tips" : "Hide Tips";
});
