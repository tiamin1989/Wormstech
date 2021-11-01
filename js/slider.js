const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/* Увеличиваем индекс на 1 — показываем следующий слайд */
function nextSlide() {
  currentSlide((slideIndex += 1));
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд */
function previousSlide() {
  currentSlide((slideIndex -= 1));
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);

  dots.forEach((e) => {
    e.classList.remove("slider__dot_active");
  });
  dots[slideIndex - 1].classList.add("slider__dot_active");
}

dots.forEach((e, i) => {
  e.addEventListener("click", () => {
    currentSlide(i + 1);
  });
});

showSlides(slideIndex);
