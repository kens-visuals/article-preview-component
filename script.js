`use strict`;

const shareBtn = document.querySelectorAll('.js-share-icon');
const shareContainer = document.querySelector('.card__info-container--active');

shareBtn.forEach((el) =>
  el.addEventListener('click', () => {
    shareContainer.classList.toggle('card__info-container--active');
    shareContainer.classList.toggle('js-animatie-container--fadeIn');
    el.classList.toggle('js-share-icon--active');

    expandAria(el);
  })
);

const expandAria = function (el) {
  let ariaExpanded = el.getAttribute('aria-expanded');

  ariaExpanded === 'true' ? (ariaExpanded = 'false') : (ariaExpanded = 'true');

  el.setAttribute('aria-expanded', ariaExpanded);
};
