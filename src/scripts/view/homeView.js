import View from "./View";

class HomeView extends View {
  _parentElement = document.querySelector(".movies-container");

  renderHome() {
    const markup = `
        <div class="top-banner">
        <div class="trailer-footage">
          <video autoplay src="/avtar2.89eba809.mp4" type="video/mp4" ></video>
          <div class="trailer-data">
            <div class="trailer-logo">
              <img
                src="src/img/avatarlogo.png"
                alt="Avatar the ways of water"
              />
            </div>
            <div class="movie-info">
              <div class="movie-info-1">
                <span class="year">2022</span>
                <span>•</span>
                <span class="time">3h 12m</span>
                <span>•</span>
                <span class="languages">6 Languages</span>
                <span>•</span>
                <span class="age-ratings">U/A 13+</span>
              </div>
              <div class="movie-info-2">
                <span class="year">Science Fiction</span>
                <span>|</span>
                <span class="time">Action</span>
                <span>|</span>
                <span class="languages">Adventure</span>
                <span>|</span>
                <span class="age-ratings">Fantasy</span>
              </div>
            </div>

            <div class="trailer-buttons">
              <button class="watch">
                <svg><use href="#play"></use></svg>
                Watch Now
              </button>
              <button class="add-to-watchlist">
                <svg>
                  <use href="#add"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
        `;
    this._parentElement.querySelector(".after-header").innerHTML = "";
    
    if (!this._parentElement.querySelector(".top-banner")) {
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
  }
}
export default new HomeView();
