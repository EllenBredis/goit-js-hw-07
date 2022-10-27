import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onclick)
    const markup = galleryItems.map(( {
        preview,
        description,
        original        
    }) => `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
         src="${preview}" 
         data-source="${original}" 
         alt="${description}"
        /></a></div> `).join('')
        galleryList.insertAdjacentHTML('beforeend', markup)

console.log(galleryItems)

function onclick (event ){
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const getImage = event.target.getAttribute('data-source')
console.log (getImage)


const instance = basicLightbox.create(`
    <img src="${getImage}" width="800" height="600">
`)

instance.show()
    

galleryList.addEventListener('keydown', offclick)
function offclick(event){
		if (event.key === 'Escape') {
			instance.close()
		}
	}
}

  
   