// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.


function playTheGame() {
    const isUserReady = confirm("Do you want to play?")

    if (!isUserReady)  return alert("No problem, Goodbye")

    const computerNumber = generateRandomNumber()

    let answer = prompt("Enter a number")
    let numberOfTries = 0


    while (Number(answer) != computerNumber) {
        numberOfTries = numberOfTries + 1
        if (numberOfTries === 3) return alert("sorry the number was " + computerNumber)
    
        if (!isOnlyNumbers(answer))  return alert("Sorry Not a number, Goodbye")
     
        if (!isBetweenZeroAndTen(Number(answer))) return alert("sorry it's not a good number, Goodbye")
        
        let biggerOrSmaller = (Number(answer) > computerNumber) ? "bigger" : "smaller" 
        alert("Your number is " + biggerOrSmaller + " than the computers, guess again")
        answer = prompt("Enter a different number")
 
    }

    alert("Congratulaiton, you've won!!. Your score was " + computerNumber)
}

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

function isOnlyNumbers(str){
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function isBetweenZeroAndTen(number) {
    return number >= 0 && number <= 10
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 11)
}

// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.

function compareNumbers(userNumber, computerNumber){
    if (userNumber === computerNumber){
        alert("WINNER")
        return
    }
    if (userNumber >compareNumbers){
        alert()
    }

}