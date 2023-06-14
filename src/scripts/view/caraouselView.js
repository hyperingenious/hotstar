import View from "../view/View";
import { CARAOUSEL_CONTENT } from "../config.js";


export default class CarouselView extends View {

  /**
   * append the caraousel to HTML, make it working
   * @param {Object} content data for caraousel in object
   */
  renderCaraousel(content) {
    const contentBox = document.querySelector(".after-header");

    contentBox.insertAdjacentHTML(
      "beforeend",
      this._movieCaraouselMarkup(content)
    );
    this._parentElement = document.querySelector(
      `.${content.category}-caraousel`
    );
    this._makeMeMove();
  }
/**
 * Generates markup for caraousel 
 * @param {Object} content receives data for caraousel
 * @returns caraousel markup
 */
  _movieCaraouselMarkup() {
    return `
        <section class="${content.category}-caraousel caraousel">
          <h3 class="movie-section-head">${content.title}</h3>
          <div class="movie-list">
              ${content.movies
                .map((data) => {
                  return `
                <div class="movie">
                  <a href="${data.url}">
                    <img src="${data.img}" alt="" />
                  </a>
                </div>
                `;
                })
                .join("")}
            </div>
          <div class="caraousel__btn">
            <button class="movie-caraousel__btn caraousel__btn--left"><</button>
            <button class="movie-caraousel__btn caraousel__btn--right">></button>
          </div>
        </section>
        `;
  }
/**
 * Add event Handler to caraousel to move left and right <    >
 */
  _makeMeMove() {
    const btnLeft = this._parentElement.querySelector(".caraousel__btn--left");
    const btnRight = this._parentElement.querySelector(
      ".caraousel__btn--right"
    );

    const cards = this._parentElement.querySelectorAll(".movie");
    const maxCards = Math.ceil(cards.length / CARAOUSEL_CONTENT);

    let cardCount = 0;

    btnRight.addEventListener("click", function () {
      if (cardCount !== maxCards - 1) {
        cardCount = cardCount + 1;
        cards.forEach(
          (card) =>
            (card.style.transform = `translateX(${-(
              cardCount *
              (CARAOUSEL_CONTENT * 100)
            )}%)`)
        );
      }
    });

    btnLeft.addEventListener("click", function () {
      if (cardCount > 0) {
        console.log("Hello executed");
        cardCount = cardCount - 1;
        cards.forEach(
          (card) =>
            (card.style.transform += `translateX(${CARAOUSEL_CONTENT * 100}%)`)
        );
      }
    });
  }
}
