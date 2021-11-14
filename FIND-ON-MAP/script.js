let map;

async function initMap() {
   const coords = await getLocation();
   map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: coords.latitude, lng: coords.longitude },
      zoom: 13,
   });
}

const getLocation = () => new Promise((resolve, reject) => {
   function success(pos) {
      resolve(pos.coords);
   };
   function error(err) {
      reject(err);
   };
   navigator.geolocation.getCurrentPosition(success, error);
});

console.log(getLocation());