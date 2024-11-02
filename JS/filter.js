// Funzioni per filtrare le carte ------------------------------------
export function filterCards(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}
