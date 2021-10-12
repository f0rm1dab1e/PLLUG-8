"use strict";

const form = document.getElementById("form");
const nickNameInput = document.querySelector(".nickname");
const nameInput = document.querySelector(".name");
const textarea = document.querySelector(".textextarea");
const btn = document.querySelector(".btn");

nickNameInput.oninput = function (e) {
   let value = e.target.value;
   if (value.length < 3 || value.length > 24 || value.match(/^[\u0400-\u04ff]+$/) || !/[a-zA-Z]/.test(value)) {
      nickNameInput.classList.add("is-invalid");
   } else {
      nickNameInput.classList.remove("is-invalid");
   }
}

nameInput.oninput = function (e) {
   let value = e.target.value;
   if (value.length < 1 || value.length > 100 || value.match(/^[\u0400-\u04ff]+$/)) {
      nameInput.classList.add("is-invalid");
   } else {
      nameInput.classList.remove("is-invalid");
   }
}

textarea.oninput = function (e) {
   let value = e.target.value;
   if (value.length < 1 || value.length > 1000 || value.match(/^[\u0400-\u04ff]+$/)) {
      textarea.classList.add("is-invalid");
   } else {
      textarea.classList.remove("is-invalid");
   }
}

// завдання зроблене не повністю, 
// перевірки на символи не працюють так, як вказано в завданні