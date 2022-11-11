function closedPaths(num) {
  let result = 0;
  let lastDigit = 0;

  while (num != 0) {
    lastDigit = num % 10;
    if (lastDigit == 0 || lastDigit == 4 || lastDigit == 6 || lastDigit == 9) {
      result += 1;
    } else if (lastDigit == 8) {
      result += 2;
    }
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(closedPaths(1288));
