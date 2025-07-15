import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Створює HTML-розмітку для галереї зображень та додає її в контейнер.
 * @param {Array<Object>} images - Масив об'єктів зображень.
 */
export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  if (!galleryContainer) {
    console.error('Gallery container not found.');
    return;
  }

  const galleryMarkup = images
    .map(
      image => `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
                <div class="image-info">
                    <div class="info-item">
                        <b>Likes</b>
                        <p>${image.likes}</p>
                    </div>
                    <div class="info-item">
                        <b>Views</b>
                        <p>${image.views}</p>
                    </div>
                    <div class="info-item">
                        <b>Comments</b>
                        <p>${image.comments}</p>
                    </div>
                    <div class="info-item">
                        <b>Downloads</b>
                        <p>${image.downloads}</p>
                    </div>
                </div>
            </a>
        </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  lightbox.refresh(); 
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-visible');
  }
}


export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-visible');
  }
}