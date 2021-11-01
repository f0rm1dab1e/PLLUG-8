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
   const imgWrapper = document.createElement("DIV");
   const img = document.createElement("IMG");
   const removeBtn = document.createElement("IMG");

   imgWrapper.appendChild(removeBtn);
   removeBtn.src = "img/trash.svg";
   imgWrapper.appendChild(img);

   removeBtn.classList.add("remove-btn");
   removeBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
      checkGallery();
   });

   img.src = URL.createObjectURL(file);
   img.classList.add("thumbnail");
   imgWrapper.classList.add("img-wrapper");
   imgWrapper.setAttribute("draggable", true);

   gallery.appendChild(imgWrapper);

   if (file.type == "text/plain") {
      img.src = "img/txt.png"
   } else if (file.type == "text/csv") {
      img.src = "img/csv.png"
   }

   checkGallery();
}

function checkGallery() {
   if (galleryFile.length > 0) {
      gallery.style.display = "flex";
   } else {
      gallery.style.display = "none";
   }
}