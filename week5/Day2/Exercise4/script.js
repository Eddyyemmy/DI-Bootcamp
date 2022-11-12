// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

const allBooks = []

const book1 = {
title: "veritatis aperiam",
author: "illo totam",
image : "https://picsum.photos/200",
alreadyRead : false
}

const book2 = {
    title: "Lorem ipsum ",
    author: "magni cumque",
    image : "https://picsum.photos/201",
    alreadyRead : true
}



// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).

const table = document.createElement("table")
table.innerHTML = `
<thead
    <tr>
        <th colspan = "3" > My Book List</th>
    </tr>
</thead>
<tbody>
    <tr class="${book1.alreadyRead ? 'is-read' : ''}">
        <td>${book1.title} written by ${book1.author}</td>
        <td>
            <img src=${book1.image}></img>  
        </td>
        <td>Already read: ${book1.alreadyRead}</td>
    </tr>
    <tr class="${book2.alreadyRead ? 'is-read' : ''}"> 
        <td>${book2.title} written by ${book2.author}</td>
        <td>
            <img src=${book2.image}></img>
        </td>
        <td>Already read: ${book2.alreadyRead}</td>
    </tr>

</tbody>
`


const bookListDiv = document.querySelector(".list-books")
bookListDiv?.appendChild(table)
console.log('BookListDiv: ', bookListDiv )

// If the book is already read. Set the color of the book’s details to red.

