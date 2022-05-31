// functions and variables are hoisted before code execution
// functions are copied as it is while variables value is un-defined
/*
let and const variables are hoisted too but they cannot be accessed before their declarations. 
This is called Temporal Dead Zone. 
arrow functions behaves like a variable
*/

console.log(a);
var a = "fire";
console.log(getAction());
function getAction() {
  return "attack";
}
console.log(newAttack);
var newAttack = () => {
  return "blast";
};
