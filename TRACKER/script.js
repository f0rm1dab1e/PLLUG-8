"use strict";

const taskInput = document.querySelector(".form-input");
const addTaskBtn = document.querySelector(".form-btn");
const tasksList = document.querySelector(".tasks-list");
const taskItem = document.querySelector(".task-item");
const removeTask = document.querySelector(".remove-task");
const taskTime = document.querySelector(".task-time");

let inputValue = "";
let emptyInputValue = new Date().toLocaleString();

addTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkInput();
    addTask();
    taskInput.value = "";
    inputValue = "";
});

function addTask() {
    const taskItem = document.createElement("li");
    const taskName = document.createElement("div");
    const leftSide = document.createElement("div");
    const taskTime = document.createElement("span");
    const playPause = document.createElement("img");
    const removeTask = document.createElement("img");

    taskItem.appendChild(taskName);
    taskItem.appendChild(leftSide);
    leftSide.appendChild(taskTime);
    leftSide.appendChild(playPause);
    leftSide.appendChild(removeTask);

    taskItem.classList.add("task-item");
    taskName.classList.add("task-name");
    taskName.innerHTML = `${inputValue}`;
    leftSide.classList.add("left-side");
    taskTime.classList.add("task-time");
    playPause.classList.add("play-pause");
    playPause.classList.add("pause");
    removeTask.classList.add("remove-task");
    removeTask.src = "img/remove.svg";

    tasksList.appendChild(taskItem);
}

taskInput.oninput = () => {
    inputValue = taskInput.value;
}

function checkInput() {
    if (inputValue == "") {
        return inputValue = emptyInputValue;
    }
}

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("pause")) {
        event.target.classList.toggle("play")
    }
});