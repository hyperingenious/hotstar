import View from "./View";

class SearchView extends View {
  _parentElement = document.querySelector(".after-header");

  /**
   * This method is used to insert the search bar to the DOM, before inserting search bar it first clears the required areas of DOM and then inserts the markup for search bar
   */
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

  /**
   * This function is used to add the submit eventHandler to the search bar and whenever the event is fired it calls the handler function passed into it
   * @param {Function} handler takes the handler function as arugment the function is coming from the model..js, and the handler function itself takes 2 arguments. 1. query entered in search bar, 2. takes the code of renderSearchResults function
   */
  addSearchHandler(handler) {
    const searchForm = this._parentElement.querySelector(".search-bar");
    const searchBar = this._parentElement.querySelector(".search-input");

    const renderSearchResults = this.renderSearchResults;

    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler(searchBar.value, renderSearchResults);
    });
  }

  /**
   * renderSearchResults takes 2 arguments 1 for the data about the top search result and 2 form the remaining results for the search query with these data it renders the search results by creating relative markup from the data and then inserting it into DOM
   * @param {Array} topData array contains data about top result of searched query
   * @param {Array} results array contains data about the results releted to searched query
   */
  renderSearchResults(topData, results) {
    const tempParent = document.querySelector(".after-header");
    console.log(results);

    if (tempParent.querySelector(".results")) {
      tempParent.querySelector(".results").remove();
      console.log("we are removed");
    }

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
}

export default new SearchView();
