// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const newArray = numbers.filter(filterCallback);

// console.log(newArray);

// function filterCallback(item) {
//   if (item >= 5 && item <= 100) {
//     return item;
//   }
// }

//////////////////

// function filter(arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.lenght; i++) {
//     const elem = callback(arr[i], i, arr);

//     if (elem !== undefined) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 999, 992, 990];

// const result = filter(numbers, function (item) {
//   if (item >= 5 && item <= 1000) {
//     return item;
//   }
// });

// console.log(result);

// every and some and find;

// reduce

let string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore, suck , corporis quibusdam, fuck , velit quia et illo. Ut, sed debitis tempora dicta rem dolorem, corrupti officiis blanditiis unde perspiciatis et a!`;

function nameFilter(words) {
  let string = words.split(" ");

  let result = string.filter(function (item) {
    if (item.toLowerCase() !== "fuck" && item.toLowerCase() !== "suck") {
      return item;
    }
  });
  return result.join(" ");
}

let endResult = nameFilter(string);
console.log(endResult);

// (
//   item !== "fuck".toUpperCase() &&
//   item !== "fuck".toLowerCase() &&
//   item !== "suck".toUpperCase() &&
//   item !== "suck".toLowerCase()
// )
