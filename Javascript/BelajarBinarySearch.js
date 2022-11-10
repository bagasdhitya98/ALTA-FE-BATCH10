function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] == target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

const array = [20, 7, 11, 8, 15, 31, 78, 55, 70, 20, 13, 51];
const sortedArray = array.sort((a, b) => {
  return a - b;
});
console.log(sortedArray);

console.log(binarySearch(sortedArray, 55));
