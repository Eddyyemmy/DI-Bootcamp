
// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

let text;
let lang = prompt("Enter your language");

let capLang = lang.toLowerCase();

if (capLang === "english") {
    console.log('Hello');
} else if (capLang === "french") {
    console.log('Bonjour');
} else if (capLang === "hebrew") {
    console.log('Shalom');
} else{
    console.log('01110011 01101111 01110010 01110010 01111001');
}

    // switch (capLang) {
    //     case "english":
    //         text = "Hello";
    //         break;
    //     case "french":
    //         text = "Bonjour";
    //         break;
    //     case "hebrew":
    //         text = "Shalom";
    //         break;
    //     default:
    //         text = "01110011 01101111 01110010 01110010 01111001";
    // }

// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.
    
// If the grade is bigger than 90, console.log “A”
    
// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

let assignGrade = prompt("What is your Grade Score");

    if (assignGrade >= 90) {
        console.log( 'Your grade is A');
    } else if (assignGrade >= 80 && assignGrade <= 90) {
        console.log( 'Your grade is B');
    } else if (assignGrade >= 70 && assignGrade <= 80) {
        console.log( 'Your grade is C');
    } else if (assignGrade <= '70'){
        console.log( 'Your grade is D');
    }

// Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

let verbing = prompt("Write a verb...");

    if (verbing.length < 3) {
        console.log( verbing);
    } else if (verbing.slice(-3) == 'ing') {
        console.log(verbing + 'ly');
    } else {
        console.log(verbing + 'ing');
    }