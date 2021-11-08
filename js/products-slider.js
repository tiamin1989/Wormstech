export default class ProductsSlider {
  constructor(list, items, left, right) {
    this.list = list;
    this.listStyle = window.getComputedStyle(this.list, null);
    this.items = items;
    this.left = left;
    this.right = right;
    this.shiftDistance = 0;
    this.gap = parseInt(this.listStyle.gap ? this.listStyle.gap : "30px");/* for firefox */
    this.itemLength = this.items[0].offsetWidth;
    this.initialPoint = 0;
    this.finalPoint = 0;
    this.fullCount = parseInt(parseInt(this.listStyle.width) / this.itemLength);
    this.index = 1 * this.fullCount;
  }

  toLeft() {
    if (this.shiftDistance === 0) return;
    this.shiftDistance = this.shiftDistance + (this.itemLength + this.gap);
    this.items.forEach((e) => {
      e.style.transform = `translate(${this.shiftDistance}px)`;
    });
    this.index--;
  }

  toRight() {
    if (this.index === this.items.length) return;
    this.shiftDistance = this.shiftDistance - (this.itemLength + this.gap);
    this.items.forEach((e) => {
      e.style.transform = `translate(${this.shiftDistance}px)`;
    });
    this.index++;
  }

  init() {
    this.list.addEventListener(
      "touchstart",
      (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        this.initialPoint = evt.changedTouches[0];
      },
      false
    );

    this.list.addEventListener(
      "touchmove",
      (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        this.finalPoint = evt.changedTouches[0];
        var xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX);
        var yAbs = Math.abs(this.initialPoint.pageY - this.finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
          if (xAbs > yAbs) {
            if (this.finalPoint.pageX < this.initialPoint.pageX) {
              /*СВАЙП ВЛЕВО*/
              this.toRight();
            } else {
              /*СВАЙП ВПРАВО*/
              this.toLeft();
            }
          } else {
            if (this.finalPoint.pageY < this.initialPoint.pageY) {
              /*СВАЙП ВВЕРХ*/
            } else {
              /*СВАЙП ВНИЗ*/
            }
          }
        }
      },
      false
    );

    this.left.addEventListener("click", () => {
      this.toLeft();
    });
    this.right.addEventListener("click", () => {
      this.toRight();
    });

    window.addEventListener(
      "resize",
      () => {
        this.listStyle = window.getComputedStyle(this.list);
        this.gap = parseInt(this.listStyle.gap ? this.listStyle.gap : "30px");/* for firefox */
        this.itemLength = this.items[0].offsetWidth;
        this.index = parseInt(parseInt(this.listStyle.width) / this.itemLength);
        this.shiftDistance = 0;
        this.items.forEach((e) => {
          e.style.transform = `translate(${this.shiftDistance}px)`;
        });
      },
      true
    );
  }
}
