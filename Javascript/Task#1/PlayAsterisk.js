function playAsterisk(number) {
  let result = "";

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number - i; j++) {
      result += " ";
    }
    for (let k = 0; k < i; k++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}

console.log(playAsterisk(1));
console.log(playAsterisk(2));
console.log(playAsterisk(3));
console.log(playAsterisk(4));
console.log(playAsterisk(5));
