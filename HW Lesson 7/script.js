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

for (let i = 0; i < n; i++) {
   obj[i];
   nullPrototypeObj[i];
   map.set(i);
}

// Add

console.time("Add obj");
obj["key"] = "value";
console.timeEnd("Add obj");

console.time("Add nullPrototypeObj");
nullPrototypeObj["key"] = "value";
console.timeEnd("Add nullPrototypeObj");

console.time("Add map");
map.set("key", "value");
console.timeEnd("Add map");

// Find

let result;

console.time("Take obj");
result = obj["key"];
console.timeEnd("Take obj");

console.time("Take nullPrototypeObj");
result = nullPrototypeObj["key"];
console.timeEnd("Take nullPrototypeObj");

console.time("Take map");
map.get("key");
console.timeEnd("Take map");

// Delete

console.time("Delete obj");
delete obj["key"];
console.timeEnd("Delete obj");

console.time("Delete nullPrototypeObj");
delete nullPrototypeObj["key"];
console.timeEnd("Delete nullPrototypeObj");

console.time("Delete map");
map.delete("key");
console.timeEnd("Delete map");

// Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map з тими самими даними.
// Тобто просто перетворити об’єкт у Map.

const newObj = { key: "value" };

function transformObjToMap(newObj) {
   return new Map(Object.entries(newObj));
}

console.log(transformObjToMap(newObj));

// Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними.
// Тобто просто перетворити Map у  об’єкт.

const newMap = new Map();
newMap.set("key", "value");

function transformMapToObj(newMap) {
   return Object.fromEntries(newMap.entries());
}

console.log(transformMapToObj(newMap));