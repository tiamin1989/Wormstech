/* Количество товара */
const counters = document.querySelectorAll(".shop-cart__counter");
counters.forEach((e) => {
  e.querySelector(".shop-cart__counter-plus").addEventListener("click", () => {
    e.querySelector(".shop-cart__counter-value").textContent =
      ++e.querySelector(".shop-cart__counter-value").textContent;
  });
  e.querySelector(".shop-cart__counter-minus").addEventListener("click", () => {
    if (e.querySelector(".shop-cart__counter-value").textContent !== "1") {
      e.querySelector(".shop-cart__counter-value").textContent =
        --e.querySelector(".shop-cart__counter-value").textContent;
    }
  });
});
