// Instructions
// Exercise 1:

// // Remove Banana from the array.
// // Sort the array in alphabetical order.
// // Add “Kiwi” to the end of the array.
// // Remove “Apples” from the array. Don’t use the same method as in part 1.
// // Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// // At the end you should see this outcome: ["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];


console.log(fruits.splice(0,1));
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.push("Kiwi"));

let newFruits = fruits.splice(0,1);
// console.log(newFruits);
console.log(fruits)
console.log(fruits.reverse(' '))

// Exercise 2:
// Using this array :

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let myFruits = moreFruits[1][1];

console.log(myFruits);

// Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const myArray = ("w3resource");
const moreArray = [1, 2, 4, 0];

let result = Array.isArray(myArray);
let moreResult = Array.isArray(moreArray);

console.log(result);
console.log(moreResult);


// Write a JavaScript function to clone an array.
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

var array_Clone = [1, 2, 4, 0];
    let myArray_Clone = array_Clone;
    console.log(myArray_Clone,array_Clone);