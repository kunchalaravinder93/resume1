const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("rk-theme");
if (savedTheme === "dark") body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("rk-theme", body.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".capability, .project, .role, .toolbox");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
