//belajar branching if statement
function checkAge(age) {
  if (age <= 16) {
    console.log("Kamu masih terlalu bocil");
  }
  if (age >= 16 && age < 21) {
    console.log("Kamu sudah remaja");
  }
  if (age >= 21) {
    console.log("Kamu sudah dewasa");
  }
}

checkAge(15);
checkAge(18);
checkAge(25);

//belajar branching else statement
function checkNumber(number) {
  if (number % 2 === 0) {
    console.log("Bilangan Genap");
  } else {
    console.log("Bilangan Ganjil");
  }
}

checkNumber(10);
checkNumber(11);
checkNumber(10.5);

//belajar branching else-if statement
function checkHour(hour) {
  if (hour < 12) {
    console.log("Selamat Pagi");
  } else if (hour < 18) {
    console.log("Selamat Sore");
  } else if (hour > 18 && hour < 22) {
    console.log("Mabar dulu gessss");
  } else {
    console.log("Waktunya tidur");
  }
}

checkHour(19);
checkHour(14);
checkHour(7);

checkHour(25);
checkHour(19);

//belajar check date
function checkDate() {
  let date = new Date();
  let parseString = date.toString();
  console.log(parseString.substring(0, 3));
  if (parseString == "Tue") {
    console.log("Ini hari selasa");
  } else {
    console.log("Ini bukan hari Selasa");
  }
}

checkDate();
