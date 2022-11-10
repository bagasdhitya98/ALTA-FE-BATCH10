function sortBuiltin(arr) {
  const result = arr.sort((a, b) => {
    return a - b;
  });
  return result;
}

const array = [34, 21, 50, 10, 8];
console.log(sortBuiltin(array));

//method reverse
console.log(
  "reverse :",
  array
    .sort((a, b) => {
      return a - b;
    })
    .reverse()
);
