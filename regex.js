const name = /regex/g;
console.log(name); /* Regular Expression Literal */
console.log(name.source);

// g - global flag
// i - case insensitivity

// exec function
// const data = "this is REgex tutorial and you are learning regex";
// const result = name.exec(data);
// console.log(result);
// console.log(result.input);
// console.log(result.index);

// test - if given search is present or not
// const data = "this is REgex tutorial and you are learning regex";
// const result = name.test(data);
// console.log(result);

// match - it will return an array of results or null
// const data = "this is regex tutorial and you are learning regex";
// const result = data.match(name);
// console.log(result);

// search - returns index of first match else -1
// const data = "this is regex tutorial and you are learning regex";
// const result = data.search(name);
// console.log(result);

// replace
// const data = "this is regex tutorial and you are learning regex";
// const result = data.replace(name, "pattern-matching");
// console.log(result);
