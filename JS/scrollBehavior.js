// scrollBehavior.js
import { isMobileDevice } from "./deviceUtils.js";
import { enableSwipeScrolling } from "./swipeScroll.js";
import { startScroll } from "./scroll.js";

export const initScrollBehavior = (scrollingList) => {
  if (isMobileDevice()) {
    enableSwipeScrolling(scrollingList);
  } else {
    startScroll();
  }
};

window.addEventListener("load", () =>
  initScrollBehavior(document.getElementById("scrollingList"))
);
window.addEventListener("resize", () =>
  initScrollBehavior(document.getElementById("scrollingList"))
);
