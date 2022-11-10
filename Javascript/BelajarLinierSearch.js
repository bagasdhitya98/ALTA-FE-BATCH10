function linierSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

const arrNumber = [27, 90, 55, 40, 21, 13, 15, 52];

console.log(linierSearch(arrNumber, 9));
