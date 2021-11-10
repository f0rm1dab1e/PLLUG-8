const cacheName = "health-v1";
const cacheAssets = [
	"./forgot-password/index.html",
	"./forgot-password/style.css",
	"./sign-in/index.html",
	"./sign-in/style.css",
	"./sign-up/index.html",
	"./sign-up/style.css",
	"./thank-you/index.html",
	"./thank-you/style.css",
	"./img/background.png",
	"script.js",
	"service-worker.js"
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