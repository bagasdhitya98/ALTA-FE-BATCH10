function caesarEncryption(offset, input) {
  let encrypted = "";

  //   let offsetMod = offset % 26;

  for (let i = 0; i < input.length; i++) {
    let asciiNum = input[i].charCodeAt();
    if (asciiNum >= 97 && asciiNum <= 122) {
      encrypted += String.fromCharCode(asciiNum + offset);
    }
  }
  return encrypted;
}

console.log(caesarEncryption(3, "abc"));
console.log(caesarEncryption(2, "alta"));
console.log(caesarEncryption(10, "alterraacademy"));
console.log(caesarEncryption(1, "abcdefghijklmnopqrstuvwxyz"));
console.log(caesarEncryption(1000, "abcdefghijklmnopqrstuvwxyz"));
