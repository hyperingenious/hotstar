import asideView from "../scripts/view/asideView.js";
import actionCaraouselView from "./view/actionCaraouselView.js";
import * as model from "./model.js";
import { objectIndex, findPriority } from "./helpers.js";
import { SCROLL_PERCENTAGE, NUM_PRIORITY } from "./config.js";
import comedyCaraouselView from "./view/comedyCaraouselView.js";
import dramaCaraouselView from "./view/dramaCaraouselView.js";

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
        console.log("iam here")
        loadPriority = loadPriority + 1;
      }, 300);
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  observer.observe(document.querySelector('.footer'))
};

/**
 * A function which should be immediately called as soon as the page loads
 */
const init = function () {
  // 1. adding the movseover and mouseout handlers to the aside bar as soon as the page loads
       asideView.mouseoverHandler()
       asideView.mouseoutHandler()

  // 2. Rendering the 'action' and 'comedy' caraousel as soon as the page loads
  actionCaraouselView.renderCaraousel(
    model.content[objectIndex(model.content, "action")]
  );
  comedyCaraouselView.renderCaraousel(
    model.content[objectIndex(model.content, "comedy")]
    
    
  );


  

  // 3. after the 'action' and 'comedy' caraousels are loaded we want to load more caraousels if the user scrolls more so we have implemented the 'infinite scrolling'
  infiniteScrollHandler();
};
init();




/*
window.addEventListener("scroll", function () {
  const scrolled =
    (window.scrollY + window.innerHeight) *
    (100 / document.documentElement.scrollHeight);

  if (scrolled > 85) {
    console.log("namsakarma");
  }
});
*/
