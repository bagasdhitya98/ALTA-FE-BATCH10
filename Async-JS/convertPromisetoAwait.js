// const shallPassed = 30;

// function generateRandomSteps() {
//   return Math.ceil(Math.random() * 10);
// }

// function generateRandomSeconds() {
//   return Math.ceil(Math.random() * 10) * 1000;
// }

// function snakesAndLaddersGame(stepNow) {
//   return new Promise(function (resolve, reject) {
//     let counter = 0;
//     console.log(`Let the game begin ...`);
//     for (let i = 1; i <= 5; i++) {
//       let steps = generateRandomSteps();
//       let time = generateRandomSeconds();
//       setTimeout(() => {
//         counter++;
//         console.log(`Step ini membutuhkan waktu ${time / 1000} detik`);
//         console.log(
//           `Step ini mendapatkan ${steps} langkah\n Sehingga langkahnya bertambah dari ${stepNow} menjadi ${(stepNow +=
//             steps)}`
//         );
//         if (counter === 5) {
//           if (stepNow >= 30) {
//             resolve(
//               `Congratulations, you have passed this game! And your total step is ${stepNow}`
//             );
//           } else {
//             reject(
//               `Goodbye! you didn't passed this game because your step only ${stepNow}, because minimum step to pass in this game is ${shallPassed}`
//             );
//           }
//         }
//       }, time);
//     }
//   });
// }

//----FUNCTION----
// async function playFunction() {
//   let strVariable = "";
//   try {
//     let response = await snakesAndLaddersGame(0);
//     strVariable = "YOU WIN";
//     console.log(response);
//   } catch (error) {
//     strVariable = "YOU LOSE";
//     console.log(error);
//   }
//   console.log(strVariable);
// }

// playFunction();

//----ARROW FUNCTION----
// const playFunction = async() => {
//     let strVariable = "";
//     try {
//       let response = await snakesAndLaddersGame(0);
//       strVariable = "YOU WIN";
//       console.log(response);
//     } catch (error) {
//       strVariable = "YOU LOSE";
//       console.log(error);
//     }
//     console.log(strVariable);
//   }

//   playFunction();
