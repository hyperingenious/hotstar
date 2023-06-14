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

/**
 * To be called as soon as page loads
 */
const init = function () {
  // 1. adding movseover & mouseout handlers asidebar
  asideView.mouseoverHandler();
  asideView.mouseoutHandler();

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

const url = "https://imdb8.p.rapidapi.com/auto-complete?q=avengers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee32fbfbb8msh828628ab834c24ep19afbbjsnc878fd0c14be",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};
const api = async function () {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
api();
