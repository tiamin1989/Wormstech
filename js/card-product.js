import ProductsSlider from "./products-slider.js";

/* С этим товаром так же покупают */
const noveltiesSection = document.querySelector("#novelties");
/* Новости и обзоры */
const newsSection = document.querySelector("#news");

const novelties = new ProductsSlider(
  noveltiesSection.querySelector(".products__list"),
  noveltiesSection.querySelectorAll(".products__list-item"),
  noveltiesSection.querySelector(".products__list-prev"),
  noveltiesSection.querySelector(".products__list-next")
);

var news = new ProductsSlider(
  newsSection.querySelector(".news__list"),
  newsSection.querySelectorAll(".news__list-item"),
  newsSection.querySelector(".products__list-prev"),
  newsSection.querySelector(".products__list-next")
);

novelties.init();
news.init();

/* Переключение фотографий товара */
const images = document.querySelectorAll(".product-card__item");
const bigImage = document.querySelector(".product-card__img");
images.forEach((e) => {
  e.addEventListener("click", () => {
    bigImage.src = e.querySelector(".product-card__item-choose-img").src;
    bigImage.alt = e.querySelector(".product-card__item-choose-img").alt;
  });
});
