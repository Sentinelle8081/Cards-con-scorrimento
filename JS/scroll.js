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
