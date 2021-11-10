const cacheName = "game-v1";
const cacheAssets = [
	"./img/boba-fett.png",
	"./img/captain-america.png",
	"./img/darth-vader.png",
	"./img/dislike.png",
	"./img/dr-doom.png",
	"./img/like.png",
	"./img/question-mark.png",
	"./img/robocop.png",
	"./img/shreder.png",
	"./img/thor.png",
	"./img/wonder-woman.png",
	"index.html",
	"script.js",
	"service-worker.js",
	"style.css"
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				cache.addAll(cacheAssets);
			})
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== cacheName) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		fetch(event.request))
		.catch(() => caches.match(event.request)
		);
});