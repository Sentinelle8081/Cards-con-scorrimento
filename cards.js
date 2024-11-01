// Effetto caricamento progressivo -----------------------------------
const images = document.querySelectorAll(".card img"); // seleziona tutte le immagini (<img>) contenute nelle cards, ossia negli elementi con classe .card.
// restituisce una lista di tutte le immagini trovate e la memorizza nella variabile images.
const loadImages = () =>
  // Qui viene dichiarata una funzione chiamata loadImages che sarà usata per verificare se le immagini sono visibili sullo schermo.
  images.forEach((img) => {
    // Ad ogni ciclo, l’immagine corrente è chiamata img e il codice all’interno delle parentesi graffe verrà eseguito su quella immagine.
    const rect = img.getBoundingClientRect(); // calcola la posizione e le dimensioni dell’immagine img relativamente alla finestra del browser.
    // Il risultato è un oggetto (chiamato rect) che contiene valori come top, left, right, e bottom dell’immagine rispetto alla finestra.
    if (rect.top < window.innerHeight) {
      //       Questo if verifica se l’immagine è visibile nello schermo.
      // rect.top indica la distanza tra la parte superiore dell’immagine e la parte superiore dello schermo.
      // window.innerHeight è l’altezza visibile della finestra del browser.
      // Se rect.top è minore dell’altezza della finestra (window.innerHeight), significa che l’immagine è almeno parzialmente visibile.
      images.classList.add("visible");
      //       Se l’immagine è visibile, viene aggiunta la classe visible all’immagine.
      // Questo fa sì che l’immagine possa mostrarsi gradualmente grazie alla transizione impostata nel CSS per .visible.
    }
  });
// Queste due righe assicurano che loadImages venga chiamata sia quando la pagina si carica ('load') sia ogni volta che l’utente scorre la pagina ('scroll').
//In questo modo, le immagini vengono controllate continuamente per vedere se devono apparire.
window.addEventListener("scroll", loadImages);
window.addEventListener("load", loadImages);

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

// Controllo scorrimento ---------------------------------------------
let intervalId;
const scrollingList = document.getElementById("scrollingList");

function startScroll() {
  let speed = window.innerWidth < 768 ? 6 : 10; // velocità più alta su dispositivi più piccoli
  intervalId = setInterval(() => {
    scrollingList.scrollLeft += 500;
  }, speed);
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
