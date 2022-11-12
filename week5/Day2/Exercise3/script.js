// // Exercise 3 : Change The Navbar
// // Instructions


// // Add the code above, to your HTML file

// // In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navbar = document.getElementById("navBar");

navbar.setAttribute("id", "socialNetworkNavigation")

// // We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).
const li = document.createElement("li")

// // Create a new text node with “Logout” as its specified text.
const logout = document.createTextNode("Logout")

// // Append the text node to the newly created list node (<li>).
li.appendChild(logout)

// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const ul = navbar?.firstElementChild
ul?.appendChild(li) 

// // Bonus
// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
 const firstLi = ul?.firstElementChild
 const lastLi = ul?.lastElementChild

//  Display the text of each link. (Hint: use the textContent property).

console.log("first Li content")
console.log(firstLi?.textContent)
console.log("last Li content")
console.log(lastLi?.textContent)