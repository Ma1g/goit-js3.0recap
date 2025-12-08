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

const name = (a, b) => { }; // <- string... function

function foo(callback1, callback2) {
    callback1();
    callback2()
}

function x() { 
    console.log("Hello world")};
function y() { 
    console.log("Hello world")};

foo(x, y);

foo(
    function x() {
        console.log("Hello world") 
    },
    function y() {
        console.log("Hello world") 
    }
)