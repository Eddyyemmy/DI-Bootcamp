// Prompt the user for several words (separated by commas).

const answer = prompt ("Input words with commas");
// Put the words into an array.

const words = answer.split(",");

const lengthOfLongestWord = getLengthOfLongestWord();

displayRows()

function displayRows() {
    const topBottomRow = createtopBottomRow();
    console.log(topBottomRow);
    for (const word of words) {
        displayWord(word);
    }
    console.log(topBottomRow);
}

function displayWord(word) {
    const numberOfSpacesToAdd = lengthOfLongestWord - word.length + 1;
    const emptySpaces = " ".repeat(numberOfSpacesToAdd);
    console.log ("* " + word + emptySpaces + "*");
}

// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// Console.log the words one per line, in a rectangular frame as seen below.
function getLengthOfLongestWord() {
    let lengthOfLongestWord = 0;
    for (const word of words) {
        const wordLength = word.length;
        if (wordLength > lengthOfLongestWord) {
            lengthOfLongestWord = wordLength;
        }
    }

    return lengthOfLongestWord;
}

function createtopBottomRow(){
    const numberOfStarsOnFirstRow = lengthOfLongestWord + 4; //NUMBERS OF STARS ON THE SIDES = 4;
    
    // let row = ""
    // for(let i = 0; i < numberOfStarsOnFirstRow; i++) {
    //     row = row + "*";
    // }
    return "*".repeat(numberOfStarsOnFirstRow);
}