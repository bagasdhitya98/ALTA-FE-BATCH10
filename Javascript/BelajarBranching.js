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

//belajar nested if

function nestedIf(v1, v2, v3, v4) {
  if (v1 === 400) {
    if (v2 === 700) {
      console.log("Nilai dari v1 adalah 400 dan nilai dari v2 adalah 700");
    }
    if (v3 === 800) {
      console.log("Nilai v3 adalah 800");
    }
    if (v4 === 900) {
      console.log("Nilai v4 adalah 900");
    }
  }
}

nestedIf(600, 700, 800, 900);

//belajar ternary operator

function checkTime(time) {
  //ternary biasa
  time >= 7 && time <= 12
    ? console.log("Selamat Pagi")
    : console.log("Selamat Siang");

  //nested if ternary

  time >= 7 && time <= 12
    ? console.log("Selamat Pagi")
    : console.log("Selamat Siang");
}

checkTime(14);

//belajar switch case
function switchCase(random) {
  switch (random) {
    case 3:
      console.log("Jawabanmu kurang tepat, terlalu kecil");
      break;
    case 4:
      console.log("Yes, jawabanmu tepat");
      break;
    case 5:
      console.log("Terlalu besar");
      break;
    default:
      console.log("Aku nggak tahu");
  }
}

let sum = 2 + 2;
switchCase(sum);

//konversi dari switch case ke if else

function switchCase2(sum) {
  if (sum === 3) {
    console.log("Jawabanmu kurang tepat, terlalu besar");
  } else if (sum === 4) {
    console.log("Yes, jawabanmu tepat");
  } else if (sum === 5) {
    console.log("Terlalu besar");
  } else {
    console.log("Aku nggak tahu");
  }
}

let sum2 = 2 + 2;
switchCase2(sum2);
