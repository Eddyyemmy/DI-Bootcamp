// 1rst Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

// function makeAllCaps(arr){
//   return new Promise((resolve,reject) => {
//     const wordCaps = arr.map(item => {
//       if(typeof item === 'string'){
//         return item.toUpperCase();
//       }
//       else{
//         reject('All the items are not strings!!!')
//       }
//     })
//     resolve(wordCaps);
//   })
// }

// function sortWords(arr) {
//   return new Promise((resolve,reject)=>{
//     if(arr.length >= 4){
//       resolve(arr.sort())
//     }
//     else{
//       reject('wrong array')
//     }
//   })
// }

// makeAllCaps(['Odun', 'Yemi','Abraham','Benjamin'])
// .then(result => sortWords(result))
// .then(result=>console.log(result))
// .catch(err => {
//   console.log(err);
// })


// 2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs() {
  return new Promise((resolve, reject) => {
    if (morse.length === 0) {
      reject("String is empty");  
    } else {
      const morseObject = JSON.parse(morse);
      resolve(morseObject)
    }
 });
}

function toMorse(morseJS) {
  const word = prompt("Enter a word");
  return new Promise((resolve, reject) => { 
    const possibleLetters = Object.keys(morseJS);
    if (!isWordOkay(word, possibleLetters)) {
      reject("Please input word in lowercase characters");
    } else {
      const result = { word: word, morse: convertWordToMorse(word, morseJS)};
      resolve(result);
    }
  });
} 

function isWordOkay(word, possibleLetters) {
  const userLetters = word.split("");
  return userLetters.every((letter) => possibleLetters.includes(letter));
}


function convertWordToMorse(word, morseJS) {
  const letters = word.split("");
  return letters.map((letter) => morseJS[letter]);
}

function joinWords({word, morse}) {
  document.getElementById("word").innerText = word;
  morse.forEach((sign, i) => {
    const p = document.createElement("p");
    p.innerText = word[i] + " = " + sign;
    document.getElementById("morse").appendChild(p);
  });
}

toJs()
  .then((morseObj) => toMorse(morseObj))
  .then((translation) => joinWords(translation))
  .catch((error) => console.error(error));

