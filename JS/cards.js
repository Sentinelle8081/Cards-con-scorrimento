function toggleDetails(button) {
  const card = button.closest(".card");
  card.classList.toggle("expanded");

  if (card.classList.contains("expanded")) {
    button.textContent = "Nascondi dettagli";
  } else {
    button.textContent = "Mostra dettagli";
  }
}
