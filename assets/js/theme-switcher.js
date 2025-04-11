// assets/js/theme-switcher.js
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  