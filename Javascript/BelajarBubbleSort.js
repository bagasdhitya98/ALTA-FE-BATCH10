function sortBubble(array) {
  let len = array.length;
  let temp = array.slice();

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (temp[j] > temp[j + 1]) {
        let varTemp = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = varTemp;
      }
    }
  }
  return temp;
}

const arrNumber = [10, 25, 20, 17, 4, 2, 8];

console.log(sortBubble(arrNumber));

const arr = [21, 34, 19, 17, 8];
