let count = 0;
let memo = [];

function fiboTopDown(n) {
  count++;
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    memo[n] = n;
  } else {
    memo[n] = fiboTopDown(n - 1) + fiboTopDown(n - 2);
  }
  return memo[n];
}

function recursiveSolution(n) {
  if (n < 2) {
    return n;
  } else {
    return recursiveSolution(n - 1) + recursiveSolution(n - 2);
  }
}

function timeTopDown(n) {
  console.time("topdown");
  const result = fiboTopDown(n);
  console.timeEnd("topdown");
  return result;
}

function timeRecursive(n) {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

console.log(timeTopDown(5));
console.log(timeRecursive(5));
