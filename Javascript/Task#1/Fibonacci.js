function playFibo(number) {
  if (number < 2) {
    return number;
  } else {
    return playFibo(number - 1) + playFibo(number - 2);
    // (9-1) + (9-2)
    // 8 + 7
    // playFibo(8) + playFibo(7)
    // (playFibo(8-1) + playFibo(8-2)) + (playFibo(7-1) + playFibo(7-2))
  }
}

console.log(playFibo(0));
console.log(playFibo(2));
console.log(playFibo(9));
console.log(playFibo(10));
console.log(playFibo(12));

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
