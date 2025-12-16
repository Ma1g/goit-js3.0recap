// function sumArray(numbers) {
//     let somaNumeros = 0
//     for (const item of numbers) {
//         somaNumeros += item;
//     }
//     return somaNumeros;

// }

// console.log(sumArray([1, 2, 3])); // 6
// console.log(sumArray([10, 20, 30])); // 60
// console.log(sumArray([])); // 0

// function getEvenNumbers(start, end) {
//     let array = []
//     for (let i = start; i <= end; i++){
//         if (i % 2 === 0) {
//             array.push(i);
//         }
//     }
//     return array;
// }

// console.log(getEvenNumbers(2, 10)); // [2,4,6,8,10]
// console.log(getEvenNumbers(7, 7)); // []
// console.log(getEvenNumbers(8, 8)); // [8]

// function checkStorage(storage, item) {
//     const lowerMessage = item.toLowerCase();
//     if(storage.includes(lowerMessage)) {
//         return `${lowerMessage} is available`;
//     } else {
//         return "Sorry, item not found";
//     }
// }

// console.log(checkStorage(["apple", "pear", "plum"], "PlUm")); // plum is available!
// console.log(checkStorage(["milk", "bread"], "water")); // Sorry, item not found

// function makeArray(arr1, arr2, limit) {
//     let newArray = []

//     for (const item of arr1) {
//         if (newArray.length === limit) break;
//         newArray.push(item)
//     }
//     for (const item of arr2) {
//         if (newArray.length === limit) break;
//         newArray.push(item)
//     }
//     return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// // ["Mango", "Poly", "Ajax"]

// console.log(makeArray(["Earth", "Jupiter"], ["Neptune","Uranus"], 4));
// // ["Earth","Jupiter","Neptune","Uranus"]

// console.log(makeArray(["Earth"], ["Mars","Venus","Mercury"], 2));
// // ["Earth","Mars"]

// console.log(makeArray(["A","B"], ["C","D"], 0)); // []

// function countUnique(arr) {
//     let uniqueNumbers = [];

//     for (const item of arr) {
//         if (!uniqueNumbers.includes(item)) {
//             uniqueNumbers.push(item)
//         }
//     }
//     return uniqueNumbers.length;
// }

// console.log(countUnique([1,1,2,3,3])); // 3
// console.log(countUnique(["a","b","a","c"])); // 3
// console.log(countUnique([])); // 0

// function filterGreaterThan(numbers, threshold) {

//     const newArray = []

//     for (const item of numbers) {
//         if (item > threshold) {
//           newArray.push(item)
//         }
//     }
//     return newArray;
// }

// console.log(filterGreaterThan([5,10,3,20], 6)); // [10,20]
// console.log(filterGreaterThan([1,2,3], 10)); // []
// console.log(filterGreaterThan([100,50], 0)); // [100,50]

// function findMin(numbers) {
//     let minNumber = numbers[0];

//     for (const item of numbers) {
//         if (item < minNumber)
//             minNumber = item;
//     }
//     return minNumber;
// }

// console.log(findMin([10, 5, 100])); // 5
// console.log(findMin([3])); // 3
// console.log(findMin([-5, -10, 0])); // -10

// function reverseArray(arr) {
//   const result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }

//   return result;
// }


// console.log(reverseArray([1,2,3])); // [3,2,1]
// console.log(reverseArray(["a","b","c"])); // ["c","b","a"]
// console.log(reverseArray([])); // []

// function mergeUnique(a, b) {
//     let newArray = []

//     for (const item of a) {
//         if (!newArray.includes(item)) {
//             newArray.push(item);
//         }
//     }
//     for (const item of b) {
//         if (!newArray.includes(item)) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }


// console.log(mergeUnique([1,2,3], [3,4,5])); // [1,2,3,4,5]
// console.log(mergeUnique(["a","b"], ["b","c"])); // ["a","b","c"]
// console.log(mergeUnique([], [1,2])); // [1,2]
