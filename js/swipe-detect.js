export default class SwipeDetector {
  constructor(list, func) {
    this.touchstartX = 0;
    this.touchstartY = 0;
    this.touchendX = 0;
    this.touchendY = 0;
    this.list = list;
    this.func = func;
  }

  handleGesture() {
    if (this.touchendX < this.touchstartX) {
      this.func("left");
      console.log("left");
    }

    if (this.touchendX > this.touchstartX) {
      this.func("right");
      console.log("right");
    }

    if (this.touchendY < this.touchstartY) {
      this.func("up");
      console.log("up");
    }

    if (this.touchendY > this.touchstartY) {
      this.func("down");
      console.log("down");
    }

    if (this.touchendY === this.touchstartY) {
      this.func("tap");
      console.log("tap");
    }
  }

  init() {
    this.list.addEventListener(
      "touchstart",
      (event) => {
        this.touchstartX = event.changedTouches[0].screenX;
        this.touchstartY = event.changedTouches[0].screenY;
      },
      false
    );
    this.list.addEventListener(
      "touchend",
      (event) => {
        this.touchendX = event.changedTouches[0].screenX;
        this.touchendY = event.changedTouches[0].screenY;
        this.handleGesture();
      },
      false
    );
  }
}
