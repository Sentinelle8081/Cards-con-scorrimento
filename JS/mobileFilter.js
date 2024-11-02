// mobileFilter.js
import { filterCards } from "./filter.js"; // Assumendo che filterCards sia in filter.js

// Imposta gli event listener per il click e il touchstart sui pulsanti di filtro
document.querySelectorAll(".filter-controls button").forEach((button) => {
  button.addEventListener("click", () => {
    filterCards(button.getAttribute("data-category"));
  });
  button.addEventListener("touchstart", (e) => {
    e.preventDefault();
    filterCards(button.getAttribute("data-category"));
  });
});
