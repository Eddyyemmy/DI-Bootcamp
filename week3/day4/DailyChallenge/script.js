
// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

const sentence = "This dinner is not that bad ! You cook well"
const wordNot = sentence.search("not")
const wordBad = sentence.search("bad")

if (wordNot === -1) {
    console.log(sentence)
} else if (wordNot < wordBad) {
    // console.log('wordBad:', wordBad)
    // console.log('wordNot:', wordNot)

    const firstPart = sentence.slice(0, wordNot)
    const secondPart = sentence.slice(wordBad + 3)
    console.log(firstPart + "good" + secondPart)
} else {
    console.log(sentence)
}