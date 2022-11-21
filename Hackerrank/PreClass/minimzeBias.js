function minimizeBias(ratings) {
  let totalBias = 0;
  ratings.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i < ratings.length; i += 2) {
    totalBias += ratings[i] - ratings[i - 1];
  }
  //   console.log(ratings);
  return totalBias;
}

console.log(minimizeBias([4, 2, 5, 1, 8, 7]));
