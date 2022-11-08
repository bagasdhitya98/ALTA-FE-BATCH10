let name = "Bagas";

//menggunakan petik dua//
console.log(
  "Hello " + name + " Saya Bahasa Javascript yang sangat menyenangkan"
);

//menggunakan backtik//
console.log(`Hello ${name} Saya Bahasa Javascript yang sangat menyenangkan`);

//belajar substring method
let paragraph = "001Turing";

let getFirstThree = paragraph.substring(0, 3);

console.log("Hasil Substring : ", getFirstThree);

//string ke number
let title = "001Turing";
let firstThree = title.substring(0, 3);

let parseNumber = parseInt(firstThree);
console.log("tipe data parseNumber :", typeof parseNumber);
console.log("hasil dari konversi number adalah :", parseNumber);

//number ke string
let number = 12345;
let parseString = number.toString();

console.log("Cek tipe data :", typeof parseString);
console.log("Konversi number ke string :", number.toString());
