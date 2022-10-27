import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onclick)
    const markup = galleryItems.map(( {
        preview,
        description,
        original        
    }) => `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image"
         src="${preview}" 
         alt="${description}"
         /></a> `).join('')
        galleryList.insertAdjacentHTML('beforeend', markup)

console.log(galleryItems)

function onclick (event){
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
        	}
    
}


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
})


