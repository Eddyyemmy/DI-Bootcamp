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

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

function displayColors() {
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        console.log(`#${i+1} choice is ${color}`)
    }
    return 
}

function arrArg(){

    if (colors.includes("Violet")) {
        console.log("yes")
    } else {
        console.log("no")
    }
}
displayColors() 
arrArg()