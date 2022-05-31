/*
Debouncing in JavaScript is a practice used to improve browser performance. 
There might be some functionality in a web page which requires time-consuming computations. 
If such a method is invoked frequently, it might greatly affect the performance of the browser, 
as JavaScript is a single threaded language.
*/

/*
Throttling or sometimes is also called throttle function is a practice used in websites. 
Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.
*/

// debouncing : if time difference between two key stroke is greather then x ms.
// Logic Function
const getData = () => {
  console.log("fetching Data.....");
};

// Handle time interval's
const debounce = (fn, d) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const batterFunction = debounce(getData, 300);

// throttling : only make a function call if diff between two func call greater then x ms

// Logic Function
const expensiveFunction = () => {
  console.log("expensive function.....");
};

const throttle = (fn, d) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};

const batterExpensiveFunction = throttle(expensiveFunction, 300);
window.addEventListener("resize", batterExpensiveFunction);

/*
onButtonClick : debuncing is batter
track how many time user is changing window size : throtting is batter
shooting game :  throttling is batter
input search : debouncing is batter
--> both totally depends on usecases
*/
