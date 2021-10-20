"use strict";

const cards = document.querySelectorAll(".game-card");

function flipCard() {
   this.classList.add("flip");
}

cards.forEach(card => card.addEventListener("click", flipCard));

(function shuffle() {
   cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 16);
      card.style.order = ramdomPos;
   });
})();