const classes = {
  item_smartphones: "block_smartphones",
  item_notebooks: "block_notebooks",
  item_tvs: "block_tvs",
  item_audio: "block_audio",
  item_photos: "block_photos",
  item_appliances: "block_appliances",
};

const catalogButton = document.querySelector(".header__catalog");
const close = document.querySelector(".catalog__close");
const catalog = document.querySelector(".catalog");
const catItem = document.querySelectorAll(".catalog__list-item");

catItem.forEach((e, i, a) => {
  function toggleOtherEls() {
    a.forEach((e) => {
      e.classList.remove("catalog__list-item_active");
    });
  }
  e.addEventListener("click", (evt) => {
    toggleOtherEls();
    evt.target.classList.toggle("catalog__list-item_active");
  });
});

close.addEventListener("click", () => {
  catalog.style.display = "none";
});

catalogButton.addEventListener("click", () => {
  catalog.style.display = "flex";
});

for (let item in classes) {
  document.querySelector(`.${item}`).addEventListener("click", (evt) => {
    for (let item in classes) {
      if (!evt.target.classList.contains(`${item}`))
        document.querySelector(`.${classes[item]}`).style.display = "none";
    }
    document.querySelector(`.${classes[item]}`).style.display = "flex";
  });
}
