import ProductsSlider from "./products-slider.js";

/* Выбор покупателей */
const userChoiceSection = document.querySelector("#buyers-choiсe");
/* Новиночки */
const noveltiesSection = document.querySelector("#novelties");
/* Новости, обзоры и статьи */
const newsSection = document.querySelector("#news");

const uChoice = new ProductsSlider(
  userChoiceSection.querySelector(".products__list"),
  userChoiceSection.querySelectorAll(".products__list-item"),
  userChoiceSection.querySelector(".products__list-prev"),
  userChoiceSection.querySelector(".products__list-next")
);

const novelties = new ProductsSlider(
  noveltiesSection.querySelector(".products__list"),
  noveltiesSection.querySelectorAll(".products__list-item"),
  noveltiesSection.querySelector(".products__list-prev"),
  noveltiesSection.querySelector(".products__list-next")
);

const news = new ProductsSlider(
  newsSection.querySelector(".news__list"),
  newsSection.querySelectorAll(".news__list-item"),
  newsSection.querySelector(".products__list-prev"),
  newsSection.querySelector(".products__list-next")
);

uChoice.init();
novelties.init();
news.init();
