"use strict";

const cards = document.querySelectorAll(".game-card");
const game = document.querySelector(".game");
const formBlock = document.querySelector(".form-block");
const nameInput = document.querySelector(".name-input");
const btn = document.querySelector(".button");
const scoreAll = document.querySelector(".score");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let userName = "";

btn.addEventListener("click", (event) => {
   event.preventDefault();
   if (nameInput.value.replace(/\s/g, "").length <= 0) {
   } else {
      game.style.display = "flex";
      scoreAll.style.display = "inline"
      formBlock.style.display = "none";
   }
});

nameInput.oninput = () => {
   userName = nameInput.value;
}

function flipCard() {
   if (lockBoard) return;
   if (this === firstCard) return;

   this.classList.add("flip");

   if (!hasFlippedCard) {

      hasFlippedCard = true;
      firstCard = this;

      return;
   }

   secondCard = this;

   checkForMatch();
}

function checkForMatch() {
   let isMatch = firstCard.dataset.personage === secondCard.dataset.personage;

   isMatch ? disableCards() : unflipCards();

   score++;
   scoreAll.innerHTML = `Score: ${score}`;
}

function disableCards() {
   setTimeout(() => {
      firstCard.classList.add("hide");
      secondCard.classList.add("hide");

      resetBoard();
   }, 1000);
}

function unflipCards() {
   lockBoard = true;

   setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
   }, 1500);
}

function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener("click", flipCard));

(function shuffle() {
   cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 16);
      card.style.order = ramdomPos;
   });
})();