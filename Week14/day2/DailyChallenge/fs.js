const fs = require("fs");

const symbols = fs.readFileSync('RightLeft.txt', 'utf8').split('')
let displaySymbols = symbols
console.log(displaySymbols);
let position = 0;

for (const symbol of symbols) {
  if (symbol === '<') {
    position = position - 1;
    const negative = position-1
  } else if (symbol === '>') {
    position = position + 1;
  } else {
    console.log(position);
  }
}

let leftOrRight;

if(position < 0){
  leftOrRight = "to the left";
}else if (position > 0) {
  leftOrRight = "to the right";
}else {
  leftOrRight = ""
}


console.log('Total Steps:', `${Math.abs(position)} steps ${leftOrRight}`);
