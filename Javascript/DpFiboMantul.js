//---FIBO DP MANTUL---

function fiboDpMantul(n) {
  if (n <= 1) {
    return n;
  }

  let fiboIMinSatu = 1;
  let fiboIMinDua = 0;
  let fiboI = -1;

  for (let i = 2; i <= n; i++) {
    fiboI = fiboIMinSatu + fiboIMinDua;
    fiboIMinDua = fiboIMinSatu;
    fiboIMinSatu = fiboI;
  }
  return fiboI;
}

function recursiveSolution(n) {
  if (n < 2) {
    return n;
  } else {
    return recursiveSolution(n - 1) + recursiveSolution(n - 2);
  }
}

function timeRecursiveFibo(n) {
  console.time("recursive");
  let result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function timeDynamicFibo(n) {
  console.time("dynamic");
  let result = fiboDpMantul(n);
  console.timeEnd("dynamic");
  return result;
}

console.log(timeRecursiveFibo(5));
console.log(timeDynamicFibo(5));

//0 1 1 2 3 5 8 13 21 34
