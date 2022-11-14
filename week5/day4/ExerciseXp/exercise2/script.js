// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const form = document.querySelector("form");


function logFormInputs(e) {
    e.preventDefault();
    const firstName = document.querySelector("[name=fname").value;
    const lastName = document.querySelector("[name=lname").value;
    if (firstName === "" || lastName === "") {
        alert("Please fill in all fields");
    } else {
        const ul = document.querySelector(".usersAnswer");
        ul.innerHTML = "";
        const firstLi = document.createElement("li");
        const secondLi = document.createElement("li");
        firstLi.innerText = firstName;
        lastName.innerHTML = lastName;
        ul.append(firstLi, lastName);
    }
}

form.addEventListener("submit", logFormInputs);