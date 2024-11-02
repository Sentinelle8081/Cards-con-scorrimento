// MOBILE filtro --> assicurare che i clic sui pulsanti di filtro vengano registrati correttamente sui dispositivi mobili.
document.querySelectorAll(".filter-controls button").forEach((button) => {
  button.addEventListener("click", (e) => {
    filterCards(button.getAttribute("data-category"));
  });
  button.addEventListener("touchstart", (e) => {
    e.preventDefault();
    filterCards(button.getAttribute("data-category"));
  });
});

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
  if (isMobileDevice()) {
    enableSwipeScrolling(); // Abilita scorrimento su swipe per dispositivi mobili
  } else {
    startScroll(); // Abilita scorrimento automatico per desktop
  }
};

// Espansione cards -------------------------------------------------------------------

// Inizializza il comportamento di scorrimento quando la pagina viene caricata ----------------------------------
window.addEventListener("load", initScrollBehavior);
window.addEventListener("resize", initScrollBehavior); // Ri-inizializza se la finestra viene ridimensionata
