function recursiveSolution(n) {
  if (n == 1) {
    return n;
  } else {
    return n * recursiveSolution(n - 1);
  }
}

function iterativeSolution(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

function recursiveTimeComplexity(n) {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function iterativeTimeComplexity(n) {
  console.time("iterative");
  const result = iterativeSolution(n);
  console.timeEnd("iterative");
  return result;
}

// console.log(recursiveSolution(10));
// console.log(iterativeSolution(10));
console.log(recursiveTimeComplexity(50));
console.log(iterativeTimeComplexity(50));
