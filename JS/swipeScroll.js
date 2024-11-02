// swipeScroll.js
import { stopScroll } from "./scroll.js"; // Importa stopScroll se è in un altro file

export const enableSwipeScrolling = (scrollingList) => {
  let startX;

  scrollingList.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopScroll();
  });

  scrollingList.addEventListener("touchmove", (e) => {
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    scrollingList.scrollLeft += diffX;
    startX = currentX;
  });
};
