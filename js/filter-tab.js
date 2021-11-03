export default class filterTab {
  constructor(title, content, arrow) {
    this.title = title;
    this.content = content;
    this.arrow = arrow;
  }

  show() {
    this.content.style.height = "100%";
    this.arrow.style.transform = "rotate(180deg)";
  }

  hide() {
    this.content.style.height = "0px";
    this.arrow.style.transform = "rotate(0deg)";
  }

  init() {
    this.title.addEventListener(
      "click",
      () => {
        if (parseInt(window.getComputedStyle(this.content).height)) {
          this.hide();
        } else {
          this.show();
        }
      },
      true
    );
  }
}
