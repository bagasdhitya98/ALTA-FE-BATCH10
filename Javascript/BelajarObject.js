//belajar object

//mengakses property di dalam object
let user = {
  name: "John Doe",
  age: 25,
  hair_color: "brown",
  height: "185 cm",
  weight: "64 kg",
};

console.log("Nama dari user adalah :", user.name);
console.log("Tinggi dari user adalah :", user.height);
console.log("Berat badan dari user adalah :", user.weight);

//menambahkan property di dalam object
let person = {
  name: "Bagas",
  favoriteFramework: "React JS, React Native, Next",
  languageProgramming: "Javascript, Typescript",
};

person["codeEditor"] = "VSCode, JSFiddle, Codepen";
console.log("Person :", person);

//memodifikasi property di dalam object
let figure = {
  name: "Fulan",
  active: true,
};
figure["active"] = false;
console.log("Figure :", figure);

//menghapus property di dalam object
let pet = {
  type: "cat",
  name: "Loki",
  hair_color: "brown",
  race: "persian",
};

delete pet.race;
console.log("Object yang dihapus propertynya :", pet);

//mengecek property di dalam object
let letterCount = {
  a: 3,
  b: 2,
  c: 1,
  d: 0,
};

let propertyNotPresent = letterCount["x"];
console.log("Nilai dari key yang ada didalam object :", propertyNotPresent);

//mengecek typeof
let marvelCharacter = {
  name: "Dr Strange",
  city: "New York",
  villain: "Dormamu",
  age: 50,
};

let result = typeof marvelCharacter.age;
console.log("Mengecek tipe data dari object yang diberikan :", result);

//generate array of keys
let iceCream = {
  flavor: "Matcha",
  addOn: "Waffle Cone",
  price: 15.5,
};

let keysInIceCream = Object.keys(iceCream);
console.log("Array dari keys di dalam object :", keysInIceCream);

//generate array of values
let streetBoba = {
  topping: "Grass Jelly",
  size: "Regular",
  sugar: "Less Sugar",
};

let valuesInStreetBoba = Object.values(streetBoba);
console.log("Array dari value di dalam object :", valuesInStreetBoba);

//nested object
let position = {
  name: "Fulan bin Fulan",
  title: "Walikota",
  address: {
    street: "Jl. Maju Mundur",
    city: "DKI Jakarta",
    state: "Indonesia",
  },
  responsibilities: [
    "Blusukan ke berbagai macam got di kota",
    "Bagi-bagi sembako gratis",
    "Membagikan beasiswa ke masyarakat",
  ],
};

//delete/hapus nested object
delete position["responsibilities"][2];
delete position["address"]["state"];

// console.log("Object yang sudah mengalami perubahan :", position);

//menggunakan method push untuk menambahkan key ke dalam nested object
position["responsibilities"].push("Menurunkan harga minyak");
console.log("Object setelah ditambahkan :", position);

//cloning object
let personal = {
  name: "John Doe",
  age: 45,
};

let cloneObject = Object.assign({}, personal);
console.log("Hasil kloning :", cloneObject);

//belajar for in (perulangan pada object)
let car = {
  type: "sedan",
  color: "red",
  year: 2021,
};

function forInKey() {
  for (const key in car) {
    console.log(car[key]);
  }
}

function forInValue() {
  for (const values in car) {
    console.log(car[values]);
  }
}

forInKey();
forInValue();
