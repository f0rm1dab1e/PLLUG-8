"use strict";

// Функція яка збільшує розмір шрифту всіх елементів списку animals;

function changeFontSize() {
   document.querySelector("#animals").style.fontSize = "20px";
}

changeFontSize();

// Функція яка видаляє всі класи останнього елемента списку animals;

// function removeLastElemClasses() {
//    document.querySelector("#animals").lastElementChild.removeAttribute("class");
// }

// removeLastElemClasses();

// Функція яка змінює background-color наступного елемента після елемента з id="cat";

function changeBackgroundColor() {
   document.querySelector("#cat").nextElementSibling.style.backgroundColor = "green";
}

changeBackgroundColor();

// Функція яка змінює колір тексту на червоний всім елементам які мають клас dangerous;

function changeTextColor() {
   document.querySelector(".dangerous").style.color = "red";
   //мало бути querySelectorAll, а потім пройтися по отриманому масиву як в наступній функції
}

changeTextColor();

// Функція яка видаляє всі елементи які мають клас pet, але якщо крім класу pet є ще інші класи, то вони повинні залишитись;

function removeClassPet() {
   document.querySelectorAll(".pet").forEach(elem => (elem.classList.length === 1) ? elem.remove() : undefined);
}

removeClassPet();

// Функція яка додає новий елемент в список birds - після цього це має бути список у якому новий елемент є першим;

function addBirdPrepend() {
   const birds = document.querySelector("#birds");
   const newBird = document.createElement("li");
   newBird.textContent = "Dove";
   birds.prepend(newBird);
}

addBirdPrepend();

// Функція яка додає новий елемент в список birds - після цього це має бути список у якому новий елемент є останнім;

function addBirdAppend() {
   const birds = document.querySelector("#birds");
   const newBird = document.createElement("li");
   newBird.textContent = "Swan";
   birds.append(newBird);
}

addBirdAppend();

// Функція яка додає додає новий список id="fish" перед списком birds;

function addNewUl() {
   const animals = document.querySelector("#animals");
   const newUl = document.createElement("ul");
   newUl.id = "fish";
   animals.after(newUl);
}

//ти вставляєш список не перед birds, а після animals. В нашому прикладі результат буде однаковий,
//але якщо раптом між ними буде якийсь інший елемент - ні

addNewUl();