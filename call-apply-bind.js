// call,apply and bind

// helps us to follow dry principle
// all follows same function borrowing
const user1 = {
  name: "user1",
  age: 25,
  designation: "marketing manager",
};

function printDetails(age, designation) {
  console.log(this.name, age, designation);
}

printDetails.call(user1, user1.age, user1.designation);
printDetails.apply(user1, [user1.age, user1.designation]);
// Returns a copy of a function
const user1PrintDetails = printDetails.bind(user1);
user1PrintDetails(user1.age, user1.designation);
