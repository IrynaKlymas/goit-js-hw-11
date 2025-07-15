import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const searchInput = searchForm.elements['search-text'];
searchForm.addEventListener('submit', async event => {
  event.preventDefault(); 
  const query = searchInput.value.trim(); 
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return; 
  }

  clearGallery();
  showLoader(); 
  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        icon: false,
        close: false,
        backgroundColor: '#ef4040', 
        maxWidth: '432px',
        minHeight: '88px',
        html: true, 
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        error.message ||
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader(); 
    searchForm.reset();
  }
});