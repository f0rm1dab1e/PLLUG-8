// Створити пустий об’єкт;

const obj = {};
console.log(obj);

// Створити пустий об’єкт без прототипу;

const nullPrototypeObj = Object.create(null);
console.log(nullPrototypeObj);

// Додати до об’єкта будь які нові поля всіма відомими способами;

const filmData = {};
filmData.title = "The Matrix";
filmData["year"] = 1999;

const rating = "IMDb";
filmData[rating] = 8.7;
console.log(filmData);

// Створити пустий масив;

const arr = [];
console.log(arr);

// Створити пустий масив довжиною 100500 елементів;

const longArr = [];
longArr.length = 100500;
console.log(longArr);

// Створити масив з декількома елементами;
// Зробити заповнений масив пустим;

let otherArr = [12, -988, "JavaScript", true];
console.log(otherArr);

otherArr.length = 0;
console.log(otherArr);

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом
// та поверне новий масив(оновлений- після видалення);

const numArr = [1, 2, 3, 4, 5];

function deleteElem(arr, index) {
   arr.splice(index, 1);
   return arr;
}

console.log(deleteElem(numArr));

// Створити функцію, яка приймає один масив у якості аргументу
// та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;

function checkArr(arr) {
   if (arr.length === 0) {
      return false;
   } else {
      return true;
   }
}

console.log(checkArr([]));
console.log(checkArr([1, 2, 3]));

// Створити функцію, яка приймає один об’єкт у якості аргументу
// та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;

const obj1 = { name: "Vitalii" };
const obj2 = {};

function checkObj(obj) {
   if (Object.keys(obj).length === 0) {
      return false;
   } else {
      return true;
   }
}

console.log(checkObj(obj1));
console.log(checkObj(obj2));

// Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;

const arr1 = [4, 8, 15];
const arr2 = [16, 23, 42];

const uniArr = () => {
   const lostArr = [...arr1, ...arr2];
   return lostArr;
}

console.log(uniArr());

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив,
// який складається з елементів попереднього в степені 3.
// Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];

const arr = [5, 7, 9];

const setExp = (arr) => {
   return arr.map((num) => num ** 3);
}

console.log(setExp(arr));

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив,
// який складається з непарних елементів вхідного масиву;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArr(arr) {
   return arr.filter((num) => num % 2 !== 0);
}

console.log(filterArr(arr));

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив,
// який складається тільки з цілих елементів вхідного масиву;
// Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];

const arr = [1.4, 2, 3.7, 4, 5.3, 6, 7.1, 8, 9.6, 10];

function parseArr(arr) {
   return arr.filter((num) => num == parseInt(num));
}

console.log(parseArr(arr));

// Створити функцію, яка нічого не повертає;

function doNothing() {
   return;
}

console.log(doNothing());