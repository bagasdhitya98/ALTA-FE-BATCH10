function updateTime(signalOne, signalTwo) {
  let mx = -1,
    ans = 0;
  const newArray = signalOne.map((e, i) => [e, signalTwo[i]]);
  //   console.log("new array :", newArray);
  for (const i of newArray) {
    if (i[0] == i[1] && i[0] > mx) {
      ans += 1;
      mx = i[0];
    }
  }
  return ans;
}

function timeComplexcity(signalOne, signalTwo) {
  console.time("updateTime");
  updateTime(signalOne, signalTwo);
  console.timeEnd("updateTime");
  return updateTime(signalOne, signalTwo);
}

console.log(timeComplexcity([1, 2, 3, 4, 1], [5, 4, 3, 4, 1]));
// console.log(timeComplexcity([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
