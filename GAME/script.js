"use strict";

const cards = document.querySelectorAll(".game-card");
const game = document.querySelector(".game");
const formBlock = document.querySelector(".form-block");
const nameInput = document.querySelector(".name-input");
const btn = document.querySelector(".button");
const scoreAll = document.querySelector(".score");
const result = document.querySelector(".result-block");
const numberOfCards = document.getElementsByClassName("game-card flip hide");
const nameItem = document.querySelector(".name-item");
const scoreItem = document.querySelector(".score-item");
const timeItem = document.querySelector(".time-item");
const modalLike = document.querySelector(".modal-like");
const modalDislike = document.querySelector(".modal-dislike");
const modalCloseBtn = document.querySelectorAll('[data-close]');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let userName = "";
let time = 0;
let endTime;

btn.addEventListener("click", (event) => {
   event.preventDefault();
   if (nameInput.value.replace(/\s/g, "").length <= 0) {
   } else {
      endTime = setInterval(startTime, 1000);
      game.style.display = "flex";
      scoreAll.style.display = "inline"
      formBlock.style.display = "none";
   }
});

function startTime() {
   time++;
}

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

function checkScore() {
   score++;
   scoreAll.innerHTML = `${score}`;
   scoreItem.innerHTML = `${score}`;
}

function checkForMatch() {
   let isMatch = firstCard.dataset.personage === secondCard.dataset.personage;

   isMatch ? disableCards() : unflipCards();

   checkScore();
}

function disableCards() {
   setTimeout(() => {
      firstCard.classList.add("hide");
      secondCard.classList.add("hide");

      showModal();
      resetBoard();
   }, 800);
}

function unflipCards() {
   lockBoard = true;

   setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      showModal();
      resetBoard();
   }, 800);
}

function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
   showResult();
}

cards.forEach(card => card.addEventListener("click", flipCard));

function showResult() {
   if (numberOfCards.length == 16) {
      scoreAll.style.display = "none";
      game.style.display = "none";
      result.style.display = "flex";
      clearInterval(endTime);

      nameItem.innerHTML = `${userName}`;
      timeItem.innerHTML = `${time}`;
   }
}

function showModal() {
   if (firstCard.dataset.personage === secondCard.dataset.personage) {
      modalLike.style.display = "block";
   } else {
      modalDislike.style.display = "block";
   }
}

function closeModal() {
   modalLike.style.display = "none";
   modalDislike.style.display = "none";
}

modalCloseBtn.forEach(modal => modal.addEventListener('click', closeModal));

(function shuffle() {
   cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 16);
      card.style.order = ramdomPos;
   });
})();