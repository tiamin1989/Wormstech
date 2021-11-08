let tabContent = document.querySelectorAll(".tabs__inner");
let tabItem = document.querySelectorAll(".tabs__list-item");

// For each element with class 'container__item'
for (let i = 0; i < tabItem.length; i++) {
  // if the element was hovered
  //you can replace mouseover with click
  tabItem[i].addEventListener("mouseover", () => {
    // Clean all containers from class 'container__inner_hidden'
    tabContent.forEach((item) => {
      item.classList.add("tabs__inner_hidden");
    });
    // Clean all links from class 'container__item_active'
    tabItem.forEach((item) => {
      item.classList.remove("tabs__list-item_active");
    });
    // Make visible correct tab content and add class to item

    tabContent[i].classList.remove("tabs__inner_hidden");
    tabItem[i].classList.add("tabs__list-item_active");
  });
}

const tabs = document.querySelector(".tabs__more");
const readThis = "Читать полностью";
const hideThis = "Спрятать";

tabs.querySelector(".tabs__more-more").addEventListener("click", () => {
    tabs.querySelector(".tabs__more-content").classList.toggle("tabs__more-content_active");
    if (!tabs.querySelector(".tabs__more-content").classList.contains("tabs__more-content_active")) {
        tabs.querySelector(".tabs__more-more").textContent = readThis;
    } else {
        tabs.querySelector(".tabs__more-more").textContent = hideThis;
    }
});
