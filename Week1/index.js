const crypto = require("crypto");

// const input = '100xdevs'

// const hash = crypto.createHash('sha256').update(input).digest('hex')

// console.log(hash)

// //Proof Of Work

// Assignment - 1

function change(prefixVal) {
  let input = 0;

  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefixVal)) {
      return { hash, inputStr };
    }
    input++;
  }
}

// console.log(change("00000"));

//Assignment-2

function changeSecond(prefixVal) {
  let input = 0;

  while (true) {
    let inputStr = "100xdevs" + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefixVal)) {
      return { hash, inputStr };
    }
    input++;
  }
}

// console.log(changeSecond("00000"));

//Assignment-3 - Proof Of Work..f

function changeSecond(prefixVal,Data) {
  let input = 0;

  while (true) {
    let inputStr = Data + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefixVal)) {
      return { hash, inputStr };
    }
    input++;
  }
}

console.log(changeSecond("00000","harkirat => Raman | Rs 100\nRam => Ankit | Rs 10 " ));

