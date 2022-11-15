//Synchrononus

// console.log("Halo, selamat siang semuanya");
// console.log("Perkenalkan namaku Javascript");
// console.log("Mempelajariku menyenangkan dan mudah, bukan?");

//Asynchronous

// console.log("Halo, selamat siang semuanya");
// setTimeout(() => {
//   console.log("Perkenalkan namaku Javascript");
// }, 5000);
// console.log("Mempelajariku menyenangkan dan mudah, bukan?");

//-----CALLBACK-----

// let buyer = (message) => {
//   console.log("Udah selesai pesanannya? " + message);
// };

// let seller = (callback) => {
//   console.log("Pesan martabak dong?...(tunggu ya, sedang dimasak)");
//   setTimeout(() => {
//     callback("Ok, martabak sudah selesai kaka");
//     //buyer("Ok, martabak sudah selesai kaka")
//   }, 4000);
// };

// seller(buyer);

// function buyer(message) {
//   console.log("Udah selesai pesanannya? " + message);
// }

// function seller(callback) {
//   console.log("Pesan martabak dong?...(tunggu ya, sedang dimasak)");
//   setTimeout(() => {
//     callback("Ok, martabak sudah selesai kaka");
//   }, 4000);
// }

// seller(buyer);

//Function Style
//function buyer(message){}
//function seller(message){}
//function customer(message){}

//Arrow Function Style
//const buyer = (message) => {}
//const seller = (message) => {}
//const costumer = (message) => {}

// let arrNumber = [5, 6, 8, 10, 2];

// let arrowSorted = arrNumber.sort((a, b) => {
//   return a - b;
// });

// let functionSorted = arrNumber.sort(function (a, b) {
//   return a - b;
// });

//STEP 1: panggil seller(buyer)
//STEP 2: buyer("Ok, martabak sudah selesai kaka")
//STEP 3: "Udah selesai pesanannya? Ok, martabak sudah selesai kaka"

//----PROMISE----

const bentengTakeshi = new Promise((resolve, reject) => {
  console.log("---BENTENG TAKESHI DIMULAI---");
  console.log("Doakan aku yaaa!!");
  let rate = Math.floor(Math.random() * 60);
  console.log(rate);
  console.log("Ayo semangat");
  setTimeout(() => {
    if (rate > 30) {
      resolve("Selamat anda berhasil menaklukkan benteng takeshi");
    } else {
      reject("Anda gagal menaklukkan benteng takeshi");
    }
  }, 3000);
});

//-----AWAIT-----

const playFunction = async () => {
  let strVariable = "";
  await bentengTakeshi
    //jika operasi async berhasil maka pakai then
    .then((hasil) => {
      strVariable = "WIN";
      console.log("hasil :", hasil);
    })
    //jika operasi async gagal maka pakai catch
    .catch((gagal) => {
      strVariable = "LOSE";
      console.log("gagal :", gagal);
    })
    .finally(() => {
      console.log("Bagaimana perasaan anda mengikuti benteng takeshi?");
    });
  console.log(strVariable);
};

playFunction();
