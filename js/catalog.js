import ProductsSlider from "./products-slider.js";

/* Новости и обзоры */
const newsSection = document.querySelector("#news");

const news = new ProductsSlider(
  newsSection.querySelector(".news__list"),
  newsSection.querySelectorAll(".news__list-item"),
  newsSection.querySelector(".products__list-prev"),
  newsSection.querySelector(".products__list-next")
);

news.init();
