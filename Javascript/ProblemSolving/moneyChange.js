function moneyChange(money) {
  const changes = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let i = 0;
  const result = [];

  while (money) {
    if (changes[i] > money) {
      i++;
      continue;
    }
    result.push(changes[i]);
    money -= changes[i];
  }
  return result;
}

console.log(moneyChange(125));
console.log(moneyChange(250));
