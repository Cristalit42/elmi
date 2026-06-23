/* =======================================================
   АНИМАЦИЯ "ЛЕСТНИЦЫ" ИЗ 4 КУСКОВ ФОТО (info-cols)
   -------------------------------------------------------
   Логика:
   1. Следим за блоком .info-cols__stairs через IntersectionObserver.
   2. Когда блок появляется в видимой зоне — запускаем показ
      кусков ПО ОЧЕРЕДИ, но с перекрытием (лесенка):
      каждый следующий кусок начинает появляться раньше,
      чем предыдущий долежит свои HOLD_MS секунд.
   3. После того как ПОСЛЕДНИЙ кусок отыграл свои HOLD_MS —
      все 4 куска одновременно уезжают вверх (is-leaving).
   4. Анимация запускается один раз за загрузку страницы
      (data-played="true"), повторно не триггерится.
   ======================================================= */

(function () {
  // Настройки тайминга — поправьте под себя
  const STEP_DELAY_MS = 450;   // через сколько мс после старта появляется СЛЕДУЮЩИЙ кусок (лесенка/каскад)
  const HOLD_MS = 4000;        // сколько каждый кусок "держится" после своего появления (3-5 сек, тут 4)
  const LEAVE_STAGGER_MS = 80; // небольшой разброс при уходе вверх, чтобы не улетали идеально синхронно (0 = строго одновременно)

  function initStairs() {
    const stairsBlocks = document.querySelectorAll('[data-stairs]');

    stairsBlocks.forEach((stairsEl) => {
      if (stairsEl.dataset.played === 'true') return;

      const pieces = Array.from(stairsEl.querySelectorAll('[data-piece]'));
      if (!pieces.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && stairsEl.dataset.played !== 'true') {
              stairsEl.dataset.played = 'true'; // чтобы не запускалось повторно
              playStairsAnimation(pieces);
              observer.unobserve(stairsEl);
            }
          });
        },
        {
          threshold: 0.3, // блок должен быть виден хотя бы на 30%, чтобы считать что доскроллили
        }
      );

      observer.observe(stairsEl);
    });
  }

  function playStairsAnimation(pieces) {
    // момент, когда последний кусок ПОЯВИТСЯ
    const lastPieceAppearAt = (pieces.length - 1) * STEP_DELAY_MS;
    // момент, когда после этого надо всем вместе уезжать вверх
    const leaveAt = lastPieceAppearAt + HOLD_MS;

    pieces.forEach((piece, index) => {
      // 1. Появление — лесенкой, каждый со своей задержкой
      setTimeout(() => {
        piece.classList.add('is-visible');
      }, index * STEP_DELAY_MS);

      // 2. Уход вверх — все примерно вместе, с небольшим разбросом.
      // ВАЖНО: is-visible НЕ убираем — кусок должен начать piece-out
      // из текущей точки (translateY(0)), а не прыгать обратно
      // в исходную позицию лесенки. is-leaving просто перебивает
      // анимацию через ту же CSS-переменную/свойство.
      setTimeout(() => {
        piece.classList.add('is-leaving');
      }, leaveAt + index * LEAVE_STAGGER_MS);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStairs);
  } else {
    initStairs();
  }
})();