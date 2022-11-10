function builtInSearch(array, target) {
  const result = array.indexOf(target);
  return result;
}

const array = [89, 97, 56, 72, 79, 47, 4, 59, 55, 13];

console.log(builtInSearch(array, 55));
console.log(builtInSearch(array, 100));
