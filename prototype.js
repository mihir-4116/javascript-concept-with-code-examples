/*
The prototype is an object that is associated with every functions and objects by default in JavaScript, 
where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. 
Every function includes prototype object by default. 
*/

const obj = {
  language: "javascript",
  getLanguage: () => {
    return this.language;
  },
};

console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);

const obj2 = {
  language: "java",
  __proto__: obj,
};

console.log(obj2.__proto__);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.__proto__);

function fun() {
  return "Having Fun!";
}
console.log(fun.__proto__);

// Add custom property to prototype
Array.prototype.show = function () {
  return this;
};

console.log(arr.show());

// Custom prototype
function MyProtoType(branch) {
  this.branch = branch;
}
const proto = new MyProtoType("cs");
console.log(proto.__proto__);
