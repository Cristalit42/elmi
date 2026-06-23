document.addEventListener("DOMContentLoaded", () => {
  // 1. Создаём CSS через JS
  const style = document.createElement("style");
  style.textContent = `
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(150px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // 2. Логика появления при скролле
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});