import ProductsSlider from "./products-slider.js";
import FilterSort from "./filter-sort.js";

/* Новости и обзоры */
const newsSection = document.querySelector("#news");

const news = new ProductsSlider(
  newsSection.querySelector(".news__list"),
  newsSection.querySelectorAll(".news__list-item"),
  newsSection.querySelector(".products__list-prev"),
  newsSection.querySelector(".products__list-next")
);

news.init();

const filter = new FilterSort(
  document.querySelector(".products-sort__item"),
  document.querySelector(".products-sort__submenu"),
  document.querySelector(".products-sort__item-arrow")
);

filter.init();
