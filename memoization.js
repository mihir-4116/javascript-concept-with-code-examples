/*
In programming, memoization is an optimization technique that makes applications more efficient and hence faster. 
It does this by storing computation results in cache, 
and retrieving that same information from the cache the next time it's needed instead of computing it again.
*/

const sumOfGivenRange = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const optimization = (func) => {
  const cache = new Map();
  return function (n) {
    if (!cache.has(n)) {
      const sum = func(n);
      cache.set(n, sum);
    }
    return cache.get(n);
  };
};

const batterFunction = optimization(sumOfGivenRange);

console.log(batterFunction(10));
