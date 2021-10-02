// Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д),
// на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase),
// яка б поєднувала в собі всі елементи масиву які є строками.

const arr = [1, "heLLo", " ", { film: "Dune" }, "MY", {}, 42, "", ["qwerty", 777, "filter"], "deAR", 23, "fRiEnD"];

function createCamelCase(arr) {
   let strArr = arr.filter((e) => typeof e == "string" && e !== "");
   let firstWord = strArr.splice(0, 1);
   return firstWord.map(l => l.toLowerCase()) + strArr.map(l => l[0].toUpperCase() + l.slice(1).toLowerCase()).join("").trim();
}

console.log(createCamelCase(arr));