import View from "../view/View";
import { CARAOUSEL_CONTENT } from "../configure.js";

export default class CarouselView extends View {
  movieCaraouselMarkup() {
    return `
        <section class="movie-carousel">
          <h3 class="movie-section-head">Movies to you</h3>
          <div class="movie-list">
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
            <div class="movie">
              <a href="#"><img src="src/img/dummy-movie-image.png" alt="" /></a>
            </div>
          </div>
          <div class="caraousel__btn">
          <button class="movie-caraousel__btn caraousel__btn--left"><</button>
          <button class="movie-caraousel__btn caraousel__btn--right">></button>
          </div>
        </section>
        `;
  }

  makeMeMove() {
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
