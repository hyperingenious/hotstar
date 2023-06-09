import icons from "../../../src/img/navicons.svg";

class AsideView {
  _parentElement = document.querySelector("header");

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
    const ul = this._parentElement.querySelector("ul");
    ul.addEventListener("mouseover", this.handler.bind(this));
  }

  mouseoutHandler() {
    const ul = this._parentElement.querySelector("ul");
    ul.addEventListener("mouseout", this.handler.bind(this));
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
