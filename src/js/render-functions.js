import SimpleLightbox from 'simplelightbox';

import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a")
const loader = document.querySelector('.loader');
  
    const gallery = document.querySelector('.gallery');

export function createGallery(images) {

const createMarkup = images.map(image => {
    return `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </li>`;
}).join('');
    
     gallery.insertAdjacentHTML('beforeend', createMarkup);
  lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden")
}

export function hideLoader() {
    loader.classList.add("hidden")
}