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


/* 

                    oninput="
                      const upInput = document.querySelector('#up-input');
                      const lowInput = document.querySelector('#low-input');
                      const upText = document.querySelector('#upper-text');
                      const lowText = document.querySelector('#lower-text');
                      if (this.value < upInput.value) {
                        lowText.value = this.value;
                      } else {
                        upInput.value = this.value;
                        upText.value = this.value;
                        lowText.value = this.value;
                      }
                    "

*/

/* 

                    oninput="
                      const upInput = document.querySelector('#up-input');
                      const lowInput = document.querySelector('#low-input');
                      const upText = document.querySelector('#upper-text');
                      const lowText = document.querySelector('#lower-text');
                      if (this.value > lowInput.value) {
                        upText.value = this.value;
                      } else {
                        lowInput.value = this.value;
                        lowText.value = this.value;
                        upText.value = this.value;
                      }
                    "

*/