function dnaComplement(str) {
  const swap = str.split("").reverse().join("");

  const complement = {
    A: "T",
    C: "G",
    T: "A",
    G: "C",
  };

  const reverseComplement = swap.replace(/A|C|T|G/gi, (i) => {
    return complement[i];
  });

  return reverseComplement;
}

console.log(dnaComplement("GTCAG"));
console.log(dnaComplement("ACCGGGTTTT"));

let text = "Elon Musk";
let result = text.replace("Musk", "Andri");
console.log(result);
