/*
A JavaScript Set is a collection of unique values. 
Each value can only occur once in a Set.
A Set can hold any value of any data type 
*/
const arr = [1, "1", 2, 3, 4, 5, 5, 6, 7, 8, 9];
const uniqueElementsArray = new Set(arr);
uniqueElementsArray.delete(5);
// uniqueElementsArray.clear();
console.log(uniqueElementsArray.has(13));
console.log(uniqueElementsArray);

/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
*/
const mapping = new Map();
mapping.set("branch", "cs");
mapping.set("course", "btech");
mapping.forEach((value, key) => {
  console.log(key, value);
});
console.log(mapping);

/* 
WeakSet in JavaScript is used to store a collection of objects.
only objects are allowed and cannot iterate through weakset
*/
const ws = new WeakSet();
ws.add({ country: "india" });
ws.add({ country: "germany" });
console.log(ws);

/*
A WeakMap is a collection of key/value pairs whose keys must be objects, 
with values of any arbitrary JavaScript type, 
and which does not create strong references to its keys. 
*/
const wm = new WeakMap();
wm.set({ country: "india" }, "country data");
wm.set({ country: "germany" }, "country data");
console.log(wm);
