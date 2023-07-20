import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `)
  .join('');

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionPosition: 'bottom',
});

lightbox.on('show.simplelightbox', () => {
  setTimeout(() => {
    const captionElements = document.querySelectorAll('.gallery__caption');
    captionElements.forEach((caption) => caption.classList.add('visible'));
  }, 250);
});

lightbox.on('close.simplelightbox', () => {
  const captionElements = document.querySelectorAll('.gallery__caption');
  captionElements.forEach((caption) => caption.classList.remove('visible'));
});

console.log(galleryItems);
