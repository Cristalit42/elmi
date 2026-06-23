document.addEventListener('DOMContentLoaded', function () {
  const burgerOpen = document.querySelector('.js-burger__btn-open');
  const burgerClose = document.querySelector('.js-burger__btn-close');
  const burger = document.querySelector('.burger');
  const burgerContent = document.querySelector('.burger__content');

  if (!burger || !burgerContent) return;

  function closeBurger() {
    burger.classList.remove('burger--active');
  }

  // Открыть
  burgerOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.add('burger--active');
  });

  // Закрыть по кнопке
  burgerClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeBurger();
  });

  // Закрыть по якорным ссылкам внутри меню
  burgerContent.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      closeBurger();
    });
  });

  // Закрыть по кнопке с классом js-overlay__btn-open
  document.querySelectorAll('.js-overlay__btn-open').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeBurger();
    });
  });

  // Клик вне меню
  document.addEventListener('click', (e) => {
    if (
      burger.classList.contains('burger--active') &&
      !burgerContent.contains(e.target)
    ) {
      closeBurger();
    }
  });
});