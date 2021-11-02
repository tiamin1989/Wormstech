import ProductsSlider from "./products-slider.js";

/* Выбор покупателей */
const userChoiceSection = document.querySelector("#buyers-choiсe");
/* Новиночки */
const noveltiesSection = document.querySelector("#novelties");

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

uChoice.init();
novelties.init();
