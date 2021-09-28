// Написати скріпт, який призведе до краху вкладки в браузері

for (let i = 0; i < 1; i--) {
   console.log("Hello world!")
}

// Працює

// Написати код, який на вході приймає стрічку і змінює всі малі букви на великі, а великі на малі. Тобто ‘Test’ ⇒ ‘tEST’

const str = "Test";
const newStr = str.split("").map(l => l == l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()).join("");
console.log(newStr);

// Хороший спосіб, молодець