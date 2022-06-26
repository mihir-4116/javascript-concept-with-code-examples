// un-defined, not-defined in js

// un-defined -> allocated in memory but value not assigned
console.log(a);
var a = "an example";
console.log(a);

// not-defined -> not allocated in memory
// console.log(b);

/*
A temporal dead zone (TDZ) is the area of a block 
where a variable is inaccessible until the moment 
the computer completely initializes it with a value. 
*/
console.log(c);
const c = "data";
