document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.querySelector('.overlay');
  const overlayContent = document.querySelector('.overlay__content');
  const overlayBtn = document.querySelectorAll('.js-overlay__btn-open');
  const overlayBtnClose = document.querySelector('.js-overlay__btn-close');
  const form = overlay.querySelector('.form');

  overlayBtn.forEach((btn) => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      overlay.classList.toggle('overlay--hidden');
    });
  });

  overlayBtnClose.addEventListener('click', function(){
    overlay.classList.add('overlay--hidden');
  });

  // Закрытие при клике вне попапа
  overlay.addEventListener('click', function(e){
    if (!overlayContent.contains(e.target)) {
      overlay.classList.add('overlay--hidden');
    }
  });

  // Симуляция отправки формы
  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Эмуляция процесса отправки (например, с задержкой)
    setTimeout(() => {
      overlay.classList.add('overlay--hidden');
      form.reset(); // Очистка формы после отправки
    }, 1000);
  });
});
