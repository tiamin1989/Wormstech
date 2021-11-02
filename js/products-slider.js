const items = document.querySelectorAll(".products__list-item");
const list = document.querySelector(".products__list");
const left = document.querySelector(".products__list-prev");
const right = document.querySelector(".products__list-next");

let shiftDistance = 0;
let gap = parseInt(window.getComputedStyle(list).gap);
let itemLength = document.querySelector(".products__list-item").offsetWidth;

function toLeft() {
  if (shiftDistance === 0) return;
  shiftDistance = shiftDistance + (itemLength + gap);
  items.forEach((e) => {
    e.style.transform = `translate(${shiftDistance}px)`;
  });
}

function toRight() {
  let x = (itemLength + gap) * (items.length - 1);
  x = ~x + 1;
  if (shiftDistance === x) return;
  shiftDistance = shiftDistance - (itemLength + gap);
  items.forEach((e) => {
    e.style.transform = `translate(${shiftDistance}px)`;
  });
}

left.addEventListener("click", toLeft);
right.addEventListener("click", toRight);

window.addEventListener(
  "resize",
  () => {
    gap = parseInt(window.getComputedStyle(list).gap);
    itemLength = document.querySelector(".products__list-item").offsetWidth;
  },
  true
);
