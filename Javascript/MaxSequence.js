//(-2)+1+(-3)+4) = 0
//(1+(-3)+4+-1) = 1
//((-3)+4+(-1)+2) = 2
//(4+(-1)+2+1) = 6

function maxSequence(arr) {
  let maxSum = -Infinity;

  //looping array untuk melakukan perulangan pada array mentah
  for (let i = 0; i < arr.length; i++) {
    //looping array untuk melakukan perulangan pada array yang akan jadi max sequence
    for (let j = 0; j < arr.length; j++) {
      let totalSum = 0;
      //looping array untuk melakukan perulangan pada array yang sudah menjadi max sequence
      for (let k = i; k < j; k++) {
        totalSum += arr[k];
        //totalSum untuk menjumlahkan deret array
      }
      if (totalSum > maxSum) {
        maxSum = totalSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([2, -3, 1, -5, 2]));
