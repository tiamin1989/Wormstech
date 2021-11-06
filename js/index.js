import ProductsSlider from "./products-slider.js";
import SwipeDetector from "./swipe-detect.js";

/* Выбор покупателей */
const userChoiceSection = document.querySelector("#buyers-choiсe");
/* Новиночки */
const noveltiesSection = document.querySelector("#novelties");
/* Новости и обзоры */
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

var news = new ProductsSlider(
  newsSection.querySelector(".news__list"),
  newsSection.querySelectorAll(".news__list-item"),
  newsSection.querySelector(".products__list-prev"),
  newsSection.querySelector(".products__list-next")
);

uChoice.init();
novelties.init();
news.init();

/* const testF = (direction) => {
  if (direction === "left") {
    news.toRight();
    console.log('to right',news)
  }
  if (direction === "right") {
    news.toLeft();
    console.log('to left',news)
  }
}

const u = new SwipeDetector(
  newsSection.querySelector(".news__list"),
  testF
);

u.init(); */