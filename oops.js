// Method -> 1 : Factory function
// function createElf(name, weapon) {
//   return {
//     name: name,
//     weapon: weapon,
//     attack() {
//       return "attack with" + weapon;
//     },
//   };
// }

// Every times stores it in new memory location
// const peter = createElf("Peter", "stones");
// peter.attack();

// Method -> 2 : Factory function
// const elfFunctionStore = {
//   attack() {
//     return "attack with" + this.weapon;
//   },
// };

// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctionStore);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const peter = createElf("Peter", "stones");
// console.log(peter.attack());

// Method -> 3 : Constructor function
// The new keyword does the following things: Properties/objects added to the construction function prototype
// function CreateElf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// CreateElf.prototype.attack = function () {
//   return "attack with" + this.weapon;
// };
// const peter = new CreateElf("Peter", "stones");
// console.log(peter.attack());

// Method -> 4 : ES6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with" + this.name;
  }
}
const peter = new Elf("Peter", "stones");
console.log(peter.attack());
