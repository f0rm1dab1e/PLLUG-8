"use strict";

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 49.839753, lng: 24.023881 },
        zoom: 13,
    });
}