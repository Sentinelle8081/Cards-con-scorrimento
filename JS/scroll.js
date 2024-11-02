// Controllo scorrimento -------------------------------------------------------------

let intervalId;
const scrollingList = document.getElementById("scrollingList");
const cardWidth = 350; // larghezza di ogni card

// scroll.js
export function startScroll() {
  let intervalId = setInterval(() => {
    scrollingList.scrollLeft += 2;
  }, 20);
}

export function stopScroll() {
  clearInterval(intervalId);
}

// Allinea alla carta più vicina ------------------------------------------------------
function alignToNearestcard() {
  const currentPosition = scrollingList.scrollLeft;
  const nearestcard = Math.round(currentPosition / cardWidth) * cardWidth;
  scrollingList.scrollLeft = nearestcard;
}
