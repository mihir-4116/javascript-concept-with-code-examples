/*
Currying is a checking method to make sure that you get everything you need before you proceed. 
It helps you to avoid passing the same variable again and again. It divides your function into 
multiple smaller functions that can handle one responsibility.
*/

function multiply(a) {
  return function multiplayByA(b) {
    return function multiplyByB(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(5)(6)(7));

// infinite currying
function add(a) {
  return function (b) {
    return b ? add(a + b) : a;
  };
}

console.log(add(5)(6)(7)(8)());
