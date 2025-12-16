// const x = 10;

// function test(userValue) {
//     console.log(userValue)
// };

// test(x);

// function x() {
//     console.log("AAAA")
// };

// function foo(callback, callback2) {
//     callback()
//     callback2()
// };

// foo(x, x)

// function myDay(breakfast, instruction) {
//     console.log("Wake up");
//     console.log("Go to school");
//     console.log(`eat ${breakfast}`)
//     console.log("Go to home");
//     instruction();
//     console.log("Go sleep");
// };

// function goToMusicSchool() {
//     console.log("Go to Music School")
//     console.log("Return from Music School")
// };

// function goToDanceSchool() {
//     console.log("Go to Dance School")
//     console.log("Return from Dance School")
// };

// function goToShoping() {
//     console.log("Go to Shoping")
//     console.log("Return from Shoping")
// }

// myDay("apple", goToMusicSchool)

// function goToMusicSchool() {
//     console.log("Go to Music School")
//     console.log("Return from Music School")
// };

// document.addEventListener('click', goToMusicSchool)

// [].forEach(goToMusicSchool);

// [].map()

// function sum(x1, x2) {
//     return x1 + x2;
// }
// function diff(x1, x2) {
//     return x1 - x2;
// }

// function getValue(value, persent) {
//     return (value / 100 * persent);
// };

// function calc(a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };

// calc(20, 13, getValue);
// calc(6, 50, getValue);
// calc(2, 3, getValue);
// calc(10, 8, getValue);

// function showItem(item) {
//     console.log(`ITEM - ${item}`)
// };

// function multiplyItem(item) {
//     return item * item;
// };

// function each(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const res = callback(array[i])
//         newArray.push(res)
//     }
//     return newArray;
// }

// console.log(each([1, 2, 3, 4], showItem))
// console.log(each([1, 2, 3, 4], multiplyItem))

// const name = (a, b) => { }; // <- string... function

// function foo(callback1, callback2) {
//     callback1();
//     callback2()
// }

// function x() {
//     console.log("Hello world")};
// function y() {
//     console.log("Hello world")};

// foo(x, y);

// foo(
//     function x() {
//         console.log("Hello world")
//     },
//     function y() {
//         console.log("Hello world")
//     }
// )

// const a = () => {};

// const name = (a, b) => a + b;

// function add(a, b ,c) {
//     return a + b + c;
// }
// const taddArrow = (a, b, c) => a + b + c;

// console.log(taddArrow(1, 2, 3))

// console.log("Hello")
// function fnA() {
//     return {
//         a: 5,
//     };
// }

// console.log(fnA())

// const arrowFnA = () => ({a: 10});

// console.log(arrowFnA())

// const arr = b => b * 2;

// const showItems = (...args) => {
//     console.log(args)
// };

// showItems(1, 2, 3, 4,5);

// function calc(a, b, callback) {
//     const result = callback(a, b);
//     console.log(result)
// };

// calc(2, 3, (x, y) => x + y);

// calc(10, 8, (x, y) => x - y)

// calc(12, 2, (a, b) => {
//     if(a % b === 0){
//         console.log(a+b);
//     } else {
//         console.log(a-b);
//     }
// }
// )

/*-------------------------------------------*/

// const numbers = [5, 10, 15, 20,  25];
// let total = 0;

// console.log(total)

// const arr = ['Hello', 'Adios','Adiossss', 'Adeus'];

// arr.forEach((item, index) => {
//     console.log(item, index)
// })

// function showItem(item, index) {
//     console.log(item, index)
// }

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = (items) => {
//   console.log(items);
//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   });
// }

// logItems(['Mango', 'Polly', 'Áriana'])

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// const changeEven = (numbers, value) => {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
// }

// const numbers = [1, 2, 3, 4, 5];
// const result = changeEven(numbers, 10);
// changeEven(numbers, 10)
// console.log(numbers);
// console.log(result);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]


const items = [30, 20, 10, 60, 70, 80];

// [true, true, true, true, true .....]

const result = items.filter((elem, index, arr) => {return elem > 20})

console.log(result)