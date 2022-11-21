function minDiff(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let ans = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    ans += Math.abs(arr[i] - arr[i + 1]);
  }
  return ans;
}

let arr = [4, 3, 3, 6, 1];
//1 3 3 4 6
// (1-3) + (3-3) + (3-4) + (4-6)
// 2 + 0 + 1 + 2
console.log(minDiff(arr));
