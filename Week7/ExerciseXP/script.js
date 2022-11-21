// // #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//         alert(`inside the funcOne function ${a}`);
//     }
// }    
//     // #1.1 - run in the console:
//  // a wound be 3 because it has been reassigned 
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? error

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// //It will console 0

//#3
// function funcFour() {
//     window.a = "hello";
// }

//a  is the property of windows

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()


//#4
// const a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? 
// test because const is not a global varibale

// //#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console // 5
// #5.2 What will happen if the variable is declared 
// with const instead of let ? 2




// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, 
// the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable


//   


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of 
// the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// const isString = (arg) => (typeof arg === "string" ? "Is a string" : "Is a not string");

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// 🌟 Exercise 4 : Colors
// Instructions
// Using this array :
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// displayColors() 
// function displayColors() {
//     for (let i = 0; i < colors.length; i++) {
//         const color = colors[i];
//         console.log(`#${i+1} choice is ${color}`)
//     } 
// }

// colors.forEach((color, i) => console.log(`#${i+1} choice is ${color}`));

// function arrArg(){
//     if (colors.includes("Violet")) {
//         console.log("yes")
//     } else {
//         console.log("no")
//     }
// }
// arrArg()

// 1
// const arrArg = colors.some((color) => color === "Violet");
// console.log(arrArg)

// 2
// const arrArg = !colors.every((color) => color !== "Violet");
// console.log(arrArg)


// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) => {
//     const colorsIndex = index + 1;
//     console.log(`${colorsIndex}${getOrdinal(colorsIndex)} choice is ${color}`);
// });

//  function getOrdinal(index) {
//     if ([1, 2, 3].includes(index)) return ordinal[index];
//     return ordinal[0];
// }


// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 0;
const vatRate = 0.17;

const details = ["+200", "-100", "+146", "+167", "-2900"];

const currentBankAccount = addVat(details);
console.log("currentBankAccount:", currentBankAccount);

function addVat(details) {
    let total = 0;
    details.forEach((details) => {
        const numExpense = Number(details);
        const expenseWithVat = numExpense * (1 + vatRate);
        total = total + expenseWithVat;
    });
    return total;
}