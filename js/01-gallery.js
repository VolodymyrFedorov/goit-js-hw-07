import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
let activeLightbox = null; 

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

gallery.addEventListener('click', event => {
  event.preventDefault();
    
    if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imageUrl}" alt="${event.target.alt}" />
    `);

    instance.show();
    activeLightbox = instance; 
    addEscapeKeyListener(); 
  }
});

function addEscapeKeyListener() {
  document.addEventListener('keydown', handleEscapeKey);
}

function removeEscapeKeyListener() {
  document.removeEventListener('keydown', handleEscapeKey);
}
function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    activeLightbox.close(); 
    activeLightbox = null; 
    removeEscapeKeyListener();
  }
}

console.log(galleryItems);
