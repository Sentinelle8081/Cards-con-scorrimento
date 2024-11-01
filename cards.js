// Effetto caricamento progressivo -----------------------------------

const images = document.querySelectorAll(".card img"); // Memorizza tutti gli elementi <img> che sono all'interno di un elemento con la classe
const loadImages = () => {
  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      images.classList.add("visible");
    }
  });
};
// Funzioni per filtrare le carte ------------------------------------
function filterCards(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

window.addEventListener("scroll", loadImages);
window.addEventListener("load", loadImages);

// Controllo scorrimento ---------------------------------------------
let intervalId;
const scrollingList = document.getElementById("scrollingList");

function startScroll() {
  intervalId = setInterval(() => {
    scrollingList.scrollLeft += 30;
  }, 10);
}

function stopScroll() {
  clearInterval(intervalId);
}

function resetScroll() {
  scrollingList.scrollLeft = 0;
  stopScroll();
}

// Espansione cards -------------------------------------------------
function toggleDetails(button) {
  const card = button.closest(".card");
  card.classList.toggle("expanded");

  if (card.classList.contains("expanded")) {
    button.textContent = "Nascondi dettagli";
  } else {
    button.textContent = "Mostra dettagli";
  }
}
