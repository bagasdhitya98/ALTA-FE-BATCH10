//BRUTE FORCE
//----Find Min Max Array----

// function findMaxMin(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log("Nilai maksimal :", max);
//   console.log("Nilai minimal :", min);
// }

// findMaxMin([2, 8, 9, 14, 30, 1, 3]);

//DIVIDE AND CONQUER
//----Binary Search----
// function binarySearch(array, target) {
//   let min = 0;
//   let max = array.length - 1;
//   let guess; //element tengah

//   while (min <= max) {
//     guess = (max + min) / 2;

//     if (array[guess] === target) {
//       return guess;
//     } else if (array[guess] < target) {
//       //ketika element tengah lebih kecil dari target, maka geser ke kanan
//       min = guess + 1;
//     } else {
//       //ketika element tengah lebih besar dari target, maka geser ke kiri
//       max = guess - 1;
//     }
//   }
//   return -1;
// }

// let arrNumber = [20, 31, 40, 11, 10, 55, 60, 91, 88, 12, 45, 50, 40, 34, 70];
// let sortedArr = arrNumber.sort((a, b) => {
//   return a - b;
// });
// console.log("Sorted number :", sortedArr);
// console.log(binarySearch(sortedArr, 12));
// console.log(binarySearch(sortedArr, 60));
// console.log(binarySearch(sortedArr, 100));

//GREEDY
//----Coin Change====
function coinChange(amount) {
  const coins = {
    twentyFiveCent: 25,
    tenCent: 10,
    fiveCent: 5,
    oneCent: 1,
  };
  let result = [];

  for (const key in coins) {
    console.log(`LOOPING => ${key}:${coins[key]}`);
    while (amount >= coins[key]) {
      console.log(`CEK KEY APAKAH SUDAH ADA`);
      if (result[key]) {
        console.log(`SUDAH ADA, INCREMENT NILAI`);
        result[key]++;
      } else {
        console.log(`MENAMBAHKAN KEY BARU DALAM RESULT`);
        result[key] = 1;
      }
      amount = amount - coins[key];
      console.log(result);
      console.log(`SISA UANG : ${amount}`);
    }
  }
  return result;
}

coinChange(42);
//result = [25, 10, 5, 1, 1]
coinChange(100);
//result = [25, 25, 25, 25]

//----Coin Change 2-----
function coinChange2(amount) {
  const coins = [25, 10, 5, 1];
  let result = [];

  for (const coin of coins) {
    while (amount >= coin) {
      result.push(coin);
      amount = amount - coin;
    }
  }
  return `${result}, dibentuk dari : ${coins}`;
}

coinChange(42);
//result = [25, 10, 5, 1, 1]
coinChange(100);
//result = [25, 25, 25, 25]
console.log(coinChange2(74));
