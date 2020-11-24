import images from './gallery-items.js';

const gallery = document.querySelector('.js-gallery')

const lightBox = document.querySelector('.js-lightbox')
const lightBoxBtn = document.querySelector('[data-action="close-lightbox"]')

// Разметка

const createTags = ({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

  const createCollection = images.reduce((acc, elem) => 
    acc + createTags(elem),
   [],)
gallery.insertAdjacentHTML('afterbegin', createCollection);


// Обработка событий

const lightBoxImg = document.querySelector('.lightbox__image')
gallery.addEventListener('click', e => {
  
  
  e.preventDefault();

    if (e.target.classList.contains('gallery__image')) {
      lightBox.classList.add('is-open')
      lightBoxImg.src = e.target.dataset.source
  } if (e.target === lightBoxBtn) {
     lightBox.classList.remove('is-open')
  }
})

// Закрытие модалки

lightBoxBtn.addEventListener('click', e => {
  lightBox.classList.remove('is-open');
  lightBoxImg.src = '';
  })