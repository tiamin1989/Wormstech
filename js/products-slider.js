export default class ProductsSlider {
  constructor(list, items, left, right) {
    this.list = list;
    this.items = items;
    this.left = left;
    this.right = right;
    this.shiftDistance = 0;
    this.gap = parseInt(window.getComputedStyle(this.list).gap);
    this.itemLength = this.items[0].offsetWidth;
    this.initialX = null;
    this.initialY = null;
  }

  toLeft() {
    if (this.shiftDistance === 0) return;
    this.shiftDistance = this.shiftDistance + (this.itemLength + this.gap);
    this.items.forEach((e) => {
      e.style.transform = `translate(${this.shiftDistance}px)`;
    });
  }
  
  toRight() {
    let x = (this.itemLength + this.gap) * (this.items.length - 1);
    x = ~x + 1;
    if (this.shiftDistance === x) return;
    this.shiftDistance = this.shiftDistance - (this.itemLength + this.gap);
    this.items.forEach((e) => {
      e.style.transform = `translate(${this.shiftDistance}px)`;
    });
  }
  
  startTouch(e) {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  }
  
  moveTouch(e) {
    if (this.initialX === null) return;
    if (this.initialY === null) return;
  
    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
  
    let diffX = this.initialX - currentX;
    let diffY = this.initialY - currentY;
  
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) this.toRight();
      else this.toLeft();
    }
    this.initialX = null;
    this.initialY = null;
    e.preventDefault();
  }

  init() {
    this.list.addEventListener("touchstart", (evt) => this.startTouch(evt), false);
    this.list.addEventListener("touchmove", (evt) => this.moveTouch(evt), false);

    this.left.addEventListener("click", () => this.toLeft());
    this.right.addEventListener("click", () => this.toRight());

    window.addEventListener(
      "resize",
      () => {
        this.gap = parseInt(window.getComputedStyle(this.list).gap);
        this.itemLength = this.items[0].offsetWidth;
      },
      true
    );
  }
}
