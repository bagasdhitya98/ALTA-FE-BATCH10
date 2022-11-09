// camelCase
// PascalCase

//menggunakan function
function greetingWords(nama) {
  console.log(`Perkenalkan, namaku adalah ${nama}`);
  console.log("Halo guys, saya adalah sebuah function atau method");
}

greetingWords("Javascript");
greetingWords("React");
greetingWords("Next");

//menggunakan const/constanta
const luasSegitiga = (alas, tinggi) => {
  let luas = (alas * tinggi) / 2;
  console.log("Luas dari segitiga adalah :", luas);
};

luasSegitiga(10, 8);

//memanggil function di dalam function lain (proses callback)
const funcTest1 = () => {
  console.log("hello, saya dari function 1");
};

const functTest2 = () => {
  funcTest1();
  console.log("hello, function 1. aku dari function 2");
};

const functTest3 = () => {
  functTest2();
  funcTest1();
  console.log("hello function 2 dan 1, aku function 3");
};

functTest3();

function func1() {
  console.log("Hello");
}
function func2() {
  func1();
  console.log("Selamat Siang");
}
function func3() {
  func2();
  console.log("Kenalan yuk");
}

func3();
