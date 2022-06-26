/*
The Object class represents one of JavaScript's data types. 
It is used to store various keyed collections and more complex entities. 
Objects can be created using the Object() 
*/

const user = {
  name: "coder",
  language: "c++",
  "like this video": true,
};

console.log(user["like this video"]);

// loop
for (key in user) {
  console.log(key, user[key]);
}

// Add dynamic properties to object
const property = "first name";
const name = "coder";
const person = {
  [property]: name,
};
console.log(property);

// Guess Output
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

// Guess Output
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// 4 ways to clone an object
const obj1 = { a: 1, b: 2 };
const objclone = Object.assign({}, obj1);
// const objclone = JSON.parse(JSON.stringify(employee));
// const objclone = { ...obj };
