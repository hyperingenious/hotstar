import icons from "../../../src/img/navicons.svg";
import View from "../view/View";

class AsideView extends View {
  _parentElement = document.querySelector("header");

  /**
   * Eventlistners will be attached to window fired whenever the hash changes to '#search' or the page loads with '#search' and it calls the handler passed into it
   * @param {FunctionStringCallback} handler a function will code will be received which will be called
   */
  hashMania(handler) {
    const handlers = ["hashchange", "load"];

    handlers.forEach((hand) =>
      window.addEventListener(hand, function () {
        handler();
      })
    );
  }

  /**
   * This can be fixed but I have not decided to fix it yet
   */
  //   svgGlowHandler() {
  //     this._parentElement.querySelectorAll(".nav-list").forEach((e) => {
  //       let svgPath;

  //       e.addEventListener("mouseover", function (e) {
  //         if (e.target === this) {
  //           svgPath = this.querySelector("use").getAttribute("href");
  //           console.log(svgPath)
  //           const svg = this.querySelector("svg");
  //           svg.innerHTML = ''
  //           svg.innerHTML = `
  //           ${icons}${svgPath}-fill
  //           `;
  //         }
  //       });
  //     });
  //   }
  mouseoverHandler() {
    // const ul = this._parentElement.querySelector("ul");
    this._parentElement.addEventListener("mouseover", this.handler.bind(this));
  }

  mouseoutHandler() {
    const ul = this._parentElement.querySelector("ul");
    this._parentElement.addEventListener("mouseout", this.handler.bind(this));
  }

  handler(e) {
    if (e.type === "mouseover") {
      this._parentElement
        .querySelectorAll(".nav-name")
        .forEach((e) => e.classList.remove("hidden"));
    }

    if (e.type === "mouseout") {
      this._parentElement
        .querySelectorAll(".nav-name")
        .forEach((e) => e.classList.add("hidden"));
    }
  }
}

export default new AsideView();
