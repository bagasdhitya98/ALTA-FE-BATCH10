let memo = [];

function fiboBottomUp(n) {
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      memo[i] = i;
    } else {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  }
  return memo[n];
}

console.log(fiboBottomUp(5));
