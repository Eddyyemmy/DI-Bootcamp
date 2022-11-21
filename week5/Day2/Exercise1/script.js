// Exercise 1

// Retrieve the div and console.log it
const container = document.getElementById("container")

// Change the name “Pete” to “Richard”.
document.querySelector(".list").children[1].textContent = "Richard"

// Change each first name of the two <ul>'s to your name.
const lists = document.querySelectorAll(".list")
lists.forEach(list => list.firstElementChild.textContent = "Benjamin")

// Delete the <li> that contains the text node “Sarah”.
lists[1].children[1].remove()


// Add a class called student_list to both of the <ul>'s.
lists.forEach(list => list.classList.add("student_list"))

// Add the classes university and attendance to the first <ul>.
const firstUl = document.querySelector("ul.list.student_list")
firstUl.classList.add("university", "attendance")


// LOOP METHODS


// const lists = document.querySelectorAll(".list");

// // FORECHH 
// list.forEach(function (element) {
//     element.classList.add("student_list");
// });
 
// // FOR OF (NEW LOOP METHOD)
// for (const element of lists) {
//     element.classList.add("student_list");
// }

// // TRADITIONAL LOOP 
// for (let i = 0; i < lists.length; i++) {
//     const element = lists[i];
//     element.classList.add("student_list")
// ;}