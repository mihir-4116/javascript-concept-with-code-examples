// clousers

/* 
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/

// Why clousers

// 1) -> Memory efficient

// Problem:
function heavyMemory(index) {
  // every time creates a new array
  const bigArr = new Array(10000).fill("😎");
  console.log("Big Array Created");
  return bigArr[index];
}
const emoji = heavyMemory(100);
console.log(emoji);

// Solution
function optimizedMemory() {
  const bigArr = new Array(10000).fill("😎");
  console.log("Big Array Created");
  return function (index) {
    return bigArr[index];
  };
}
const getEmoji = optimizedMemory();
const newEmoji = getEmoji(300);
console.log(newEmoji);

// 2) -> Encapsulation
// radious is encapsulated inside area
function createCircle(radious) {
  return {
    area: function () {
      return Math.PI * radious * radious;
    },
  };
}
const obj = createCircle(3);
console.log(obj.area());
