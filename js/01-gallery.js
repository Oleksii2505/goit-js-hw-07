import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const imgCardMarkup = createImgCardMarkup(galleryItems);
function createImgCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("afterbegin", imgCardMarkup);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const onCloseModal = (event) => {
    const ESC_KEY = "Escape";
    if (event.code === ESC_KEY) {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height = "600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  instance.show();
}
console.log(galleryItems);
