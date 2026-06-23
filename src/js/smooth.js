document.addEventListener("DOMContentLoaded", () => {
  const OFFSET = 150; // отступ сверху в пикселях

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - OFFSET;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
