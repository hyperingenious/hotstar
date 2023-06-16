import asideView from "../scripts/view/asideView.js";
import actionCaraouselView from "./view/actionCaraouselView.js";
import * as model from "./model.js";
import { objectIndex, findPriority } from "./helpers.js";
import { SCROLL_PERCENTAGE, NUM_PRIORITY } from "./config.js";
import comedyCaraouselView from "./view/comedyCaraouselView.js";
import dramaCaraouselView from "./view/dramaCaraouselView.js";
import searchView from "./view/searchView.js";

let loadPriority = 0;

// const infiniteScrollHandler = function () {
//   window.addEventListener("scroll", function () {
//     const scrolled =
//       (window.scrollY + window.innerHeight) *
//       (100 / document.documentElement.scrollHeight);

//     if (scrolled > SCROLL_PERCENTAGE && loadPriority < NUM_PRIORITY) {
//       const priorityObject =
//         model.content[findPriority(model.content, loadPriority)];
//       setTimeout(() => {
//         console.log("iam here")
//         loadPriority = loadPriority + 1;
//       }, 300);
//     }
//   });
// };

const infiniteScrollHandler = function () {
  const callback = function (entries, observer) {
    if (loadPriority < NUM_PRIORITY) {
      const priorityObject =
        model.content[findPriority(model.content, loadPriority)];
      setTimeout(() => {
        console.log("iam here");
        loadPriority = loadPriority + 1;
      }, 300);
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  observer.observe(document.querySelector(".footer"));
};

const controlHash = async function () {
  const hash = window.location.hash;
  if (hash === "#search") {
    searchView.renderSearchPage();
    searchView.addSearchHandler(model.apiCaller);
    // searchView.renderSearchResults(model.state.search)
  }
};

/**
 * To be called as soon as page loads
 */
const init = function () {
  // 1. adding movseover & mouseout handlers asidebar
  asideView.mouseoverHandler();
  asideView.mouseoutHandler();

  asideView.hashMania(controlHash);

  // 2. Rendering 'action' & 'comedy' section
  actionCaraouselView.renderCaraousel(
    model.content[objectIndex(model.content, "action")]
  );
  comedyCaraouselView.renderCaraousel(
    model.content[objectIndex(model.content, "comedy")]
  );

  // 3. to implement infinite scrolling
  infiniteScrollHandler();
};
if (module.hot) {
  module.hot.accept();
}
init();
