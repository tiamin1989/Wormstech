export default class FilterSort {
    constructor(title, content, arrow) {
      this.title = title;
      this.content = content;
      this.arrow = arrow;
    }
  
    show() {
      this.content.style.height = "unset";
      this.arrow.style.transform = "rotate(180deg)";
    }
  
    hide() {
      this.content.style.height = "0px";
      this.arrow.style.transform = "rotate(0deg)";
    }
  
    init() {
      this.title.addEventListener(
        "mouseenter",
        () => {
            this.show();
        },
        true
      );
      this.title.addEventListener(
        "mouseleave",
        () => {
            this.hide();
        },
        true
      );
    }
  }
  