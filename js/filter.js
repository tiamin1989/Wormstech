import filterTab from "./filter-tab.js";

let lowerSlider = document.querySelector("#lower"),
  upperSlider = document.querySelector("#upper"),
  lowerVal = parseInt(lowerSlider.value),
upperVal = parseInt(upperSlider.value);
const elementFrom = document.querySelector("#lower-text"),
  elementTo = document.querySelector("#upper-text");

upperSlider.onchange = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  elementTo.value = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;

    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
};

lowerSlider.onchange = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  elementFrom.value = parseInt(lowerSlider.value);

  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;

    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }
  }
};

const smartsTab = new filterTab(
  document.querySelector("#smarts"),
  document.querySelector("#smarts").nextElementSibling,
  document.querySelector("#smarts").parentElement.querySelector(".catalog-sec__title-arrow")
);
smartsTab.init();

const priceTab = new filterTab(
  document.querySelector("#price"),
  document.querySelector("#price").nextElementSibling,
  document.querySelector("#price").parentElement.querySelector(".catalog-sec__title-arrow")
);
priceTab.init();