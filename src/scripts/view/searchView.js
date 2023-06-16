import View from "./View";

class SearchView extends View {
  _parentElement = document.querySelector(".after-header");

  renderSearchPage() {
    const searchMarkup = `
        <form class="search-bar">
          <input type="text" class="search-input" placeholder="Search..." />
        </form>
        `;
    this._clearTopBanner();
    this._clearAfterHeader();
    this._parentElement.insertAdjacentHTML("afterbegin", searchMarkup);
  }
  addSearchHandler(handler) {
    const searchForm = this._parentElement.querySelector(".search-bar");
    const searchBar = this._parentElement.querySelector(".search-input");

    const renderSearchResults = this.renderSearchResults;

    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler(searchBar.value, renderSearchResults);
    });
  }
  renderSearchResults(topData, results) {
    const tempParent = document.querySelector(".after-header");
    console.log(results);

    if (tempParent.querySelector(".results")) {
      tempParent.querySelector(".results").remove();
      console.log("we are removed");
    }
    /*
      id: "tt4154796"
      l: "Avengers: Endgame"
      q: "feature"
      qid: "movie"
      rank: 258
      s: "Robert Downey Jr., Chris Evans"
      y: 2019
    */
    const markup = `
        <div class="results">
           <div class="top-result">
             <img
               src="${topData[0].i.imageUrl}"
               alt=""
             />
             <div class="top-result-data">
               <h1 class="top-result-title">${topData[0].l}</h1>
               <div class="top-result-details">
                 <span class="top-result-type">${topData[0].qid}</span>
                 <span class="top-result-year">${topData[0].y}</span>
               </div>
               <div class="top-result-top-roles">
                 <p class="top-result-role-1">${topData[0].s.split(",")[0]}</p>
                 <p class="top-result-role-2">${topData[0].s.split(",")[1]}</p>
               </div>
               <button class="top-result-play">Watch Now</button>
             </div>
           </div>
        
        <div class="other-results">
            ${results
              .map((result) => {
                return `
                  <div class="other-result-card">
                    ${
                      result?.i
                        ? `<img src="${result.i.imageUrl}" alt=""/>`
                        : "Banner is not available"
                    }
                      <span class="other-result-movie-name">${result.l}</span>
                  </div>
                   `;
              })
              .join("")}
        </div>
      </div>

    `;
    tempParent.insertAdjacentHTML("beforeend", markup);
  }

  /*
    <div class="other-results">
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
            <div class="other-result-card">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
                alt=""
              />
              <span class="other-result-movie-name">Avengers Endgame</span>
            </div>
    */
}

export default new SearchView();
