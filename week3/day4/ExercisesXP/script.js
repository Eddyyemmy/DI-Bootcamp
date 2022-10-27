// 🌟 Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.

let x = 10;
let y = 5;

// Write an if/else statement that checks which number is bigger.

if (x > y) {
    console.log("x is bigger than y");
    
}else {
    console.log("x is not bigger than y");
}

// Exercise 2: Chihuahua
// // Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.

const newDog = "Chihuahua";

// Check and display how many letters are in newDog.

console.log(newDog.length);

// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") {
    console.log("I love Chihuahua, it's my favourit dog breed");
} else {
    console.log("I dont care, i prefer cats");
}

// 🌟 Exercise 3: Even Or Odd
// // Instructions
// Prompt the user for a number and save it to a variable.

var myVar = prompt("Enter a number");

// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

if (myVar % 2 == 0) {
    console.log("This digit you inserted is an even number");
} else {
    console.log("This digit you inserted is an odd number");
}

// 🌟 Exercise 4: Group Chat
// Instructions
// Below is an array of users that are online in a group chat.

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:

let usersConnected = users.length;

    switch (usersConnected) {
        case 0:
            console.log('No one is online');
            break;
        case 1:
            console.log(' ${users[0]} is online}');
            break;
        case 2:
            console.log(' ${users[0]} and ${users[1]} is online}');
            break;
        default:
        console.log(' ${users[0]} and ${users[1]} ${users[usersConnected -2]} more users are connected}');
}



// const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// let sentence;
// if (users.length === 0) {
//     sentence = "No one is online";
// } else if (users.length === 1) {
//     sentence = `${users[0]} is online`;
// }else if (users.length === 2) {
//     sentence = `${users[0]} and ${users[1]} are online`;
// }else {
//     const remainingUsers = users.length - 2; 
//     sentence = `${users[0]}, ${users[1]} and ${remainingUsers} more are online`;
// }

// console.log(sentence);