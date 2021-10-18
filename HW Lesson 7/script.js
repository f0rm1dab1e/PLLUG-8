"use strict";

/* Провести заміри продуктивності для звичайного об’єкта, об’єкта без прототипу та MAP.
Зробити заміри на різних наборах даних, наприклад 100 ключів, 10 000 ключів, 10 000 000 ключів.
Дослідити швидкість добавлення нового ключа, взяття значення за ключем, видалення ключа на кожному наборі даних.
Також дослідити перетворення тестовану структуру даних у масив, швидкість ітерації(у чистій формі та разом з конвертацією). */

const obj = {};
const nullPrototypeObj = Object.create(null);
const map = new Map();

const n = 100;
// const n = 10000;
// const n = 10000000;
/**
 * Заміри продуктивності слід проводити окремо для звичайного об'єкта, об'єкта без прототипу та Map. У вас всі способи в одному циклі, відповідно час ми отримаємо загальний для всіх трьох разом.
 */
for (let i = 0; i < n; i++) {
   obj[i];
   nullPrototypeObj[i];
   map.set(i);
}

// Add

console.time("Add obj");
obj[n];
console.timeEnd("Add obj");

console.time("Add nullPrototypeObj");
nullPrototypeObj[n];
console.timeEnd("Add nullPrototypeObj");

console.time("Add map");
map.set(n);
console.timeEnd("Add map");

// Find

let result1;

console.time("Take obj");
result1 = obj["key"];
console.timeEnd("Take obj");

console.time("Take nullPrototypeObj");
result1 = nullPrototypeObj["key"];
console.timeEnd("Take nullPrototypeObj");

console.time("Take map");
result1 = map.get("key");
console.timeEnd("Take map");

// Delete

console.time("Delete obj");
delete obj[n];
console.timeEnd("Delete obj");

console.time("Delete nullPrototypeObj");
delete nullPrototypeObj[n];
console.timeEnd("Delete nullPrototypeObj");

console.time("Delete map");
map.delete(n);
console.timeEnd("Delete map");

// Transform to arr

let result2;

console.time("Transform obj to arr");
result2 = Object.entries(obj);
console.timeEnd("Transform obj to arr");

console.time("Transform nullPrototypeObj to arr");
result2 = Object.entries(nullPrototypeObj);
console.timeEnd("Transform nullPrototypeObj to arr");

console.time("Transform map to obj");
result2 = Array.from(map);
console.timeEnd("Transform map to obj");

// Transform to arr and iteration (forEach)

let result3;

console.time("Transform obj to arr and iteration");
result3 = Object.entries(obj).forEach(([key, value]) => key = value);
console.timeEnd("Transform obj to arr and iteration");

console.time("Transform nullPrototypeObj to arr and iteration");
result3 = Object.entries(nullPrototypeObj).forEach(([key, value]) => key = value);
console.timeEnd("Transform nullPrototypeObj to arr and iteration");

console.time("Transform map to arr and iteration");
result3 = Array.from(map).forEach(([key, value]) => key = value);
console.timeEnd("Transform map to arr and iteration");

// Iteration (for...in)

let result4;

console.time("Iteration for...in obj");
for (let key in obj) {
   result4 = key;
}
console.timeEnd("Iteration for...in obj");

console.time("Iteration for...in nullPrototypeObj");
for (let key in nullPrototypeObj) {
   result4 = key;
}
console.timeEnd("Iteration for...in nullPrototypeObj");

console.time("Iteration for...in map");
for (let key in map.keys()) {
   result4 = key;
}
console.timeEnd("Iteration for...in map");

// Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map з тими самими даними.
// Тобто просто перетворити об’єкт у Map.

const newObj = { key: "value" };

/**
 * Добре.
 */
function transformObjToMap(newObj) {
   return new Map(Object.entries(newObj));
}

console.log(transformObjToMap(newObj));

// Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними.
// Тобто просто перетворити Map у  об’єкт.
const newMap = new Map();
newMap.set("key", "value");

/**
 * Добре.
 */
function transformMapToObj(newMap) {
   return Object.fromEntries(newMap.entries());
}

console.log(transformMapToObj(newMap));