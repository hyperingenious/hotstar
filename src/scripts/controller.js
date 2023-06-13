import asideView from "../scripts/view/asideView.js";
import actionCaraouselView from "./view/actionCaraouselView.js";
import * as model from "./model.js";
import { objectIndex } from "./helpers.js";
import { SCROLL_PERCENTAGE, LOAD_PRIORITY } from "./config.js";
import comedyCaraouselView from "./view/comedyCaraouselView.js";


const infiniteScrollHandler = function () {
  window.addEventListener("scroll", function () {
    const scrolled =
      (window.scrollY + window.innerHeight) *
      (100 / document.documentElement.scrollHeight);

    if (scrolled > SCROLL_PERCENTAGE) {

      handler();
    }
  });
};

const init = function () {
  // asideView.mouseoverHandler()
  // asideView.mouseoutHandler()

  actionCaraouselView.renderCaraousel(
    model.content[objectIndex(model.content, "action")]
  );
  comedyCaraouselView.renderCaraousel(
    model.content[objectIndex(model.content, "comedy")]
  );

  
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
