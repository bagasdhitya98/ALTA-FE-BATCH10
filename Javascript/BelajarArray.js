//belajar array
let foods = ["seblak", "boba", "bakso", "mie ayam", "cimol"];
let years = [93, 94, 95, 96, 97, 98];
let combine = ["seblak", 94, "boba", 95];

console.log(foods[3]);
console.log(years[5]);
console.log(combine[2], combine[3]);

console.log(combine);

//mengubah value array
console.log("--------------------------------");

let fruits = ["Melon", "Banana", "Salak", "Jeruk", "Apel"];

fruits[1] = "Belimbing";
fruits[2] = "Durian";

console.log("Array yang terjadi setelah diubah :", fruits);
console.log("Panjang array dari fruits :", fruits.length);

//method push
console.log("--------------------------------");
let phoneBrand = ["Apple", "Samsung", "Xiaomi", "Oppo"];

let pushPhoneBrand = phoneBrand.push("Vivo");

console.log("Array yang sudah ditambahkan :", phoneBrand);
console.log("Jumlah index terbaru :", pushPhoneBrand);

//method pop
console.log("--------------------------------");
let carBrand = ["Honda", "Tesla", "Toyota", "BMW", "Mitsubishi"];
let carBrandPopped = carBrand.pop();
console.log("Car dengan element terakhir yang sudah dihapus :", carBrand);
console.log("Apa yang terjadi ketika kita memanggil pop() :", carBrandPopped);

//method unshift
console.log("--------------------------------");
let gorengan = ["Tempe", "Tahu", "Bakwan", "Singkong", "Risol", "Pisang"];
let unshfitGorengan = gorengan.unshift("Cireng");

console.log("Gorengan yang sudah ditambahkan element di depan", gorengan);
console.log("Hasil dari unshift :", unshfitGorengan);

//method shift
console.log("--------------------------------");
let lesson = [
  "Kalkulus",
  "Aljabar Linear",
  "Pemrograman Object",
  "Optimasi Algoritma",
];

let shiftedLesson = lesson.shift();
console.log("Mata kuliah dengan element yang sudah dihapus di depan :", lesson);
console.log("Hasil dari pemanggilan shift :", shiftedLesson);

//copy of array
console.log("--------------------------------");
let sample = ["A", "B", "C", "D", "E", "F", "G", "H"];
let copyOfSample = sample.slice();
console.log("Copy of sample :", copyOfSample);

let slice_1 = sample.slice(1, 6);
console.log(
  "Hasil dari slice dari index ke-1, hingga sebelum index ke 6",
  slice_1
);

//array looping
console.log("--------------------------------");
let numberArr = [12, 30, 14, 25, 46, 17, 58, 39];

function loopingArr() {
  for (let i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i]);
  }
}

loopingArr();

//array for of
console.log("--------------------------------");
let itemArr = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];

function forOf() {
  for (const item of itemArr) {
    console.log(item);
  }
}

forOf();

//array object

let names = [
  {
    name: "John Doe",
    age: 21,
    address: {
      city: "Jakarta",
    },
  },
  {
    name: "Fulan bin Fulan",
    age: 26,
    address: {
      city: "Surabaya",
    },
  },
  {
    name: "Mawar",
    age: 17,
    address: {
      city: "Bandung",
    },
  },
  {
    name: "Budi",
    age: 20,
    address: {
      city: "Semarang",
    },
  },
];

console.log("Mengakses index ke-2", names[2]);
console.log("Mengakses index ke-2 dengan value age :", names[2]["age"]);

console.log("Mengakses setengah dari array : ", names[names.length / 2].age);

console.log("Mengakses city dari index ke-3 :", names[3].address.city);

console.log(
  "Mengakses semua city dari array :",
  names.map((item) => item.address.city)
);

//concat

function mergeArray(arr1, arr2) {
  let arrMerge = arr1.concat(arr2);
  console.log(arrMerge);
}

mergeArray(["Mitro, Yudha, Hendri"], ["Inri, Almira"]);

function mergeWithAdded(arr1, addOn) {
  let arrResult = arr1.concat(addOn);
  console.log(arrResult);
}

mergeWithAdded(["Pisang", "Jeruk", "Salak", "Nangka"], "Durian");

//method splice

let fruitsSplice = ["Semangka", "Kiwi", "Stroberi", "Melon"];
fruitsSplice.splice(2, 0, "Nanas", "Belimbing");
console.log("Hasil penambahan buah :", fruitsSplice);
// console.log("Panjang index dari fruitsSplice :", fruitsSplice.length);

//method slice

let makanan = ["Ayam Geprek", "Ayam Penyet", "Lele Bakar", "Nila Goreng"];
let spliceMakanan = makanan.slice(2);

console.log("Hasil slicing dari makanan :", spliceMakanan);

//method toString

let deviceBrand = ["Asus", "Acer", "Apple", "HP"];
console.log(typeof deviceBrand.toString());
