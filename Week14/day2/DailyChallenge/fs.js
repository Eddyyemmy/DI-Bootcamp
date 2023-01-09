const fs = require("fs");

const symbols = fs.readFileSync('RightLeft.txt', 'utf8').split('')
let displaySymbols = symbols
console.log(displaySymbols);

let position = 0;
let step = 0;
let setatminusone = null;
for (const symbol of symbols) {
  if(symbol != "<" && symbol != ">") {
    console.log("wrong step");
    continue;
  }
  if (symbol === '<') {
    position = position - 1;
    const negative = position-1
  } else if (symbol === '>') {
    position = position + 1;

  }

step++
  if (position === -1 && setatminusone === null) {
    setatminusone = step;
    console.log(`First time in left side is in: ${setatminusone} steps`);
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
