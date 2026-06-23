document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.js__dropdown-btn');

  dropdownButtons.forEach((dropdownBtn) => {
    const dropdownList = dropdownBtn.nextElementSibling;

    if (dropdownList && dropdownList.classList.contains('js__dropdown-list')) {
      dropdownBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        document.querySelectorAll('.js__dropdown-list--active').forEach((activeList) => {
          if (activeList !== dropdownList) {
            activeList.classList.remove('js__dropdown-list--active');
          }
        });
        document.querySelectorAll('.js__dropdown-btn--active').forEach((activeBtn) => {
          if (activeBtn !== dropdownBtn) {
            activeBtn.classList.remove('js__dropdown-btn--active');
          }
        });

        // Переключаем состояние текущего списка
        dropdownList.classList.toggle('js__dropdown-list--active');
        dropdownBtn.classList.toggle('js__dropdown-btn--active');
      });
    }
  });
});
