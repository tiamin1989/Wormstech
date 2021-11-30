const images = document.querySelectorAll(".product-card__item-choose-img");
const mainImage = document.querySelector(".product-card__img");

images.forEach((image) => {
  image.addEventListener("click", (evt) => {
    mainImage.alt = evt.target.alt;
    mainImage.src = evt.target.src;
  });
});
