import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

function createImgCardMarkup() {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}"
       >
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>`
    )
    .join("");

  galleryRef.innerHTML = markup;
}
createImgCardMarkup();

let gallery = new SimpleLightbox(".gallery__item");

gallery.on("show.simplelightbox", function () {
  gallery.defaultOptions.captionDelay = 250;
});

console.log(galleryItems);
