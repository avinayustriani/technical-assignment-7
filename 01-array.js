// Soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


// Soal 2
// const arr1 = [1, 3, 4, 1, 2, 8];
// const arr2 = [5, 6, 7, 8, 1, 3];

// function getAverage(array) {
//   return array.reduce((a, b) => a + b) / array.length;
// }

// console.log(getAverage(arr1))
// console.log(getAverage(arr2))


// Soal 3
// const arr = [
//     [10],
//     [9, 7, 1],
//     [2, 8],
//   ];
  
//   function searchInArray(arr) {
//     return arr.find(array => array);
//   }
  
//   console.log(searchInArray(arr, 3));
//   console.log(searchInArray(arr, 2));
//   console.log(searchInArray(arr, 4));
//   console.log(searchInArray(arr, 8));  