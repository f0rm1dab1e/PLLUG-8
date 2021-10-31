"use strict";

const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file");
const gallery = document.getElementById("gallery");
const galleryFile = document.getElementsByClassName("thumbnail");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => dropArea.addEventListener(eventName, (event) => {
   event.preventDefault();
   event.stopPropagation();
}));

dropArea.addEventListener("drop", (event) => {
   let dt = event.dataTransfer;
   let files = dt.files;
   [...files].forEach(uploadFile);
});

fileInput.addEventListener("change", ({ target: { files } }) => {
   [...files].forEach(uploadFile);
});

function uploadFile(file) {
   if (file) {
      const imgWrapper = document.createElement("DIV");
      const img = document.createElement("IMG");
      const removeBtn = document.createElement("IMG");

      imgWrapper.appendChild(removeBtn);
      removeBtn.src = "img/trash.svg";
      imgWrapper.appendChild(img);

      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", (event) => {
         event.target.parentNode.remove();
      });

      img.src = URL.createObjectURL(file);
      img.classList.add("thumbnail");
      imgWrapper.classList.add("img-wrapper");

      gallery.appendChild(imgWrapper);


      checkGallery();
   }
}

function checkGallery() {
   if (galleryFile) {
      gallery.style.display = "flex";
   }
}