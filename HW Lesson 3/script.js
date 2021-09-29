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