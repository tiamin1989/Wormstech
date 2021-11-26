import filterTab from "./filter-tab.js";

const filterToggler = document.querySelector(".catalog-sec__filter-toggler");
filterToggler.addEventListener("click", () => {
  const filters = document.querySelector(".catalog-sec__column-left");
  filters.classList.toggle("catalog-sec__column-left_active");
});

const smartsTab = new filterTab(
  document.querySelector("#smarts"),
  document.querySelector("#smarts").nextElementSibling,
  document
    .querySelector("#smarts")
    .parentElement.querySelector(".catalog-sec__title-arrow")
);
smartsTab.init();

const priceTab = new filterTab(
  document.querySelector("#price"),
  document.querySelector("#price").nextElementSibling,
  document
    .querySelector("#price")
    .parentElement.querySelector(".catalog-sec__title-arrow")
);
priceTab.init();
