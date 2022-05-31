const companies = [
  { name: "google", type: "product based" },
  { name: "amazon", type: "product based" },
  { name: "tcs", type: "service based" },
  { name: "infosys", type: "service based" },
];

const ages = [33, 4, 122, 34, 5, 6, 43, 33566, 322, 457, 32, 56];

// Different Loops

// 1) for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// 2) forEach loop
companies.forEach((item) => {
  console.log(item.name);
});

// 3) filter
const serviceBasedCompanies = companies.filter((item) => {
  return item.type === "service based";
});
console.log(serviceBasedCompanies);

// 4) map
// Return whole new arr or obj(dosen't change main array or obj)
const newCompaniesArray = companies.map((item) => {
  return { ...item, isProfitable: true };
});
console.log(newCompaniesArray);

// 5) sort
// ASEC
console.log(ages.sort((a, b) => a - b));
// DESC
console.log(ages.sort((a, b) => b - a));

// 6) Reduce
const totalSum = ages.reduce((total, curr) => {
  return total + curr;
}, 0);
console.log(totalSum);
