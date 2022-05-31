// Rest && Spread Operator

// in Array
// 1) Rest (spread -> combine)

const addNumbers = (a, b, c, ...rest) => {
  console.log(rest);
  return a + b + c;
};

const res = addNumbers(3, 4, 5, 6, 7);
console.log(res);

// 2) Spread
const arr = [1, 2, 3];
const sumOfArrayElements = (ele1, ele2, ele3) => {
  return ele1 + ele2 + ele3;
};

// Method : 1
// const ans = sumOfArrayElements(arr[0], arr[1], arr[2]);
// Method : 2 => using spread operator
const ans = sumOfArrayElements(...arr);

// in Objects
const student1 = {
  name: "mark",
  age: 21,
  branch: "computer",
};

// Rest
const { name, ...rest } = student1;

// Spread
const student2 = { ...student1, name: "cube" };
console.log(student2);
