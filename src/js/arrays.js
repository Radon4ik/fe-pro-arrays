/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Это используется для удобного быстрого перебора массива, она ничего не возвращает, просто обрабатывает коллбеком каждый элемент массива,
  фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
const array = [1, 2, 3];

function forEach(array, callback) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }

};
function any(item, index) {
  console.log(item, index);
}
forEach(array, any);



/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который получается в результате вычисления callback для каждого элемента.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function map(array, callback) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;

}

const mappedArray = map(array, callback);
console.log(mappedArray);

function callback(item, index, arr) {
  return item * 4;
}
/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который включает в себя элементы только те, для которых callback вернул true.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function filter(array, callback) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }

  }
  return newArr;
}

const newArr = filter(array, (item) => item > 1);
console.log(newArr);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива, 3 аргумент изначальный вариант
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Это используется для удобного быстрого перебора массива. Функция должна результат.
 Функция возвращает результат вычислений. В callback передаем 4 аргумента.
 Первый это предыдущий элемент(для первой итерации как раз используется initialValue), второй это текущий элемент перебора, 3 индекс и 4 сам массив.
 Смотрите на пример в example.js
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function reduce(array, callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }
  return result;
}
const reduceResult = reduce(array, (previous, current, index) => {
  return previous + current;
}, 0)
console.log(reduceResult);

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет true, то вся функция возвращает true/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;

}
const someResult = some(array, (item, index, array) => {
  return item > 2;
});

console.log(someResult); // => true

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет false, то вся функция возвращает false/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function every(array, callback) {
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i], i, array)
    if (!result) {
      return false;
    }
  }
  return true;
}


const everyResult = every(array, (item, index, array) => {
  return item > 2;
});
console.log(everyResult); // => false

// Эту часть не удаляем, она важна для проверки результата
module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
};
