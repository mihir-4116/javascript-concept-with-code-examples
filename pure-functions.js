/*
A pure function is a deterministic function. 
This means when a same input is passed every time, the function will return same output. 
In mathematical terms it is nothing but a well defined function.

A pure function will have the following properties:
=> It depends only on its own arguments.
=> It wont try to change variables out of its scope.
=> It doesn't produce any side effects.
*/

// Example : 1
const arr = [1, 2, 3, 4, 5, 6, 7];

function notPureFunction(arr, ele) {
  arr.push(ele);
  return arr;
}
function pureFunction(arr, ele) {
  return [].concat(...arr, ele);
}
console.log(notPureFunction(arr, 8));
console.log(pureFunction(arr, 9));
console.log(arr);

// Example : 2

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = originalArray.map((ele) => {
  return ele * 3;
});

console.log(originalArray);
console.log(newArray);
