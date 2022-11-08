//belajar for looping increment

function forLoopIncrement() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

forLoopIncrement();
console.log("------------------------------");

//belajar for looping decrement

function forLoopDecrement() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

forLoopDecrement();
console.log("------------------------------");

//belajar while

function whileLoop(number) {
  while (number < 5) {
    console.log(number);
    number++;
  }
}

whileLoop(6);
console.log("------------------------------");

//belajar continue & break
function continueFunc(num) {
  for (let i = num; i < 10; i++) {
    if (i == 1) {
      continue;
    }
    if (i > 8) {
      break;
    }
    console.log(i);
  }
}

continueFunc(1);
