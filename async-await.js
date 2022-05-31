// Asynchronous Programming

// we want to call insertData before getData
const data = [
  { name: "a", proffession: "software engineer" },
  { name: "b", proffession: "software engineer" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((item) => {
      output += `<li>${item.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function insertData(newData) {
  setTimeout(() => {
    data.push(newData);
  }, 2000);
}

getData();
insertData({ name: "c", proffession: "mechanical engineer" });
getData();

// Method 1 :  Callback function

function insertData(newData, callback) {
  setTimeout(() => {
    data.push(newData);
    callback();
  }, 2000);
}

insertData({ name: "c", proffession: "mechanical engineer" }, getData);

// Method 2: Using Promises

function insertData(newData) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      data.push(newData);
      resolve();
    }, 2000);
  });
}

insertData({ name: "c", proffession: "mechanical engineer" })
  .then(getData)
  .catch((err) => console.log(err));

// Method 3 : Using async/await
function insertData(newData) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      data.push(newData);
      resolve();
    }, 2000);
  });
}

async function createData() {
  await insertData({ name: "c", proffession: "mechanical engineer" });
  getData();
}
createData();
