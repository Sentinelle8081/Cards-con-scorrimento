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

// Controllo scorrimento -------------------------------------------------------------
let intervalId;
const scrollingList = document.getElementById("scrollingList");
const cardWidth = 350; // larghezza di ogni card

function startScroll() {
  stopScroll(); // Assicura di fermare il movimento precedente
  intervalId = setInterval(() => {
    scrollingList.scrollLeft += 2;
  }, 20);
}

// funzione per alternare tra scorrimento manuale e automatico -------------------------
function toggleScrollMode() {
  const button = document.querySelector(".controls button");
  autoScrollEnabled = !autoScrollEnabled;
  if (autoScrollEnabled) {
    button.textContent = "Attiva scorrimento manuale";
  } else {
    stopScroll();
    button.textContent = "Attiva scorrimento automatico";
  }
}
function stopScroll() {
  clearInterval(intervalId);
}

function resetScroll() {
  scrollingList.scrollLeft = 0;
  stopScroll();
}

// funzione per rilevare se il device è mobile --------------------------------------------------------------------
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 768px)").matches; // Considera dispositivi fino a 768px come mobile
};

// Funzione per abilitare lo scorrimento con swipe --------------------------------------------------
const enableSwipeScrolling = () => {
  let startX;

  scrollingList.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopScroll(); // Ferma lo scorrimento automatico se attivo
  });

  scrollingList.addEventListener("touchmove", (e) => {
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    scrollingList.scrollLeft += diffX; // Scorre la lista in base al movimento del finger
    startX = currentX; // Aggiorna la posizione iniziale
  });
};

// Funzione per inizializzare il comportamento di scorrimento ------------------------------------------------------
const initScrollBehavior = () => {
  if (isMobileDevice) {
    enableSwipeScrolling(); // Abilita scorrimento su swipe per dispositivi mobili
  } else {
    startScroll(); // Abilita scorrimento automatico per desktop
  }
};

// Scorrimento automatico solo per desktop ------------------------------------------------------------------
const startScroll = () => {
  stopScroll();
  intervalId = setInterval(() => {
    scrollingList.scrollLeft += 2;
  }, 20);
};

const stopScroll = () => {
  clearInterval(intervalId);
};

const resetScroll = () => {
  scrollingList.scrollLeft = 0;
  stopScroll();
};

// Allinea alla carta più vicina ------------------------------------------------------
function alignToNearestcard() {
  const currentPosition = scrollingList.scrollLeft;
  const nearestcard = Math.round(currentPosition / currentWidth) * cardWidth;
  scrollingList.scrollLeft = nearestcard;
}

// Espansione cards -------------------------------------------------------------------
function toggleDetails(button) {
  const card = button.closest(".card");
  card.classList.toggle("expanded");

  if (card.classList.contains("expanded")) {
    button.textContent = "Nascondi dettagli";
  } else {
    button.textContent = "Mostra dettagli";
  }
}

// Inizializza il comportamento di scorrimento quando la pagina viene caricata ----------------------------------
window.addEventListener("load", initScrollBehavior);
window.addEventListener("resize", initScrollBehavior); // Ri-inizializza se la finestra viene ridimensionata
