`use strict`;

const shareBtn = document.querySelectorAll('.js-share-icon');
const animateContainer = document.querySelector('.js-animatie-container');
const shareContainer = document.querySelector('.card__info-container--active');

shareBtn.forEach((el) =>
  el.addEventListener('click', () => {
    const shareContainerStyles = getComputedStyle(shareContainer);

    if (
      shareContainerStyles.display === 'none' &&
      !shareContainer.classList.contains('js-animatie-container')
    ) {
      shareContainer.style.display = 'flex';
      shareContainer.classList.add('js-animatie-container');
    } else {
      shareContainer.style.display = 'none';
      shareContainer.classList.remove('js-animatie-container');
    }
  })
);
